// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CampaignDonacion {
    address public owner;
    uint256 public montoObjetivo;
    uint256 public montoEtapa1;
    uint256 public montoEtapa2;
    uint256 public montoTotal;
    bool public etapa1Completada;
    bool public etapa2Completada;

    address public beneficiario1;
    address public beneficiario2;

    address public walletAutorizante1;
    address public walletAutorizante2;
    address public walletAutorizante3;
    address public walletAutorizante4;

    mapping(address => uint256) public donaciones;

    event DonacionRecibida(address donante, uint256 monto);
    event EtapaCompletada(string etapa, address beneficiario, uint256 monto);

    modifier soloPropietario() {
        require(msg.sender == owner, "Solo el propietario puede realizar esta operación");
        _;
    }

    modifier etapaNoCompletada(string memory etapa) {
        if (keccak256(abi.encodePacked(etapa)) == keccak256(abi.encodePacked("Etapa1"))) {
            require(!etapa1Completada, "La Etapa1 ya ha sido completada");
        } else if (keccak256(abi.encodePacked(etapa)) == keccak256(abi.encodePacked("Etapa2"))) {
            require(etapa1Completada && !etapa2Completada, "La Etapa2 no está habilitada");
        }
        _;
    }

    constructor(
        uint256 _montoObjetivo,
        uint256 _montoEtapa1,
        uint256 _montoEtapa2,
        address _beneficiario1,
        address _beneficiario2,
        address _walletAutorizante1,
        address _walletAutorizante2,
        address _walletAutorizante3,
        address _walletAutorizante4
    ) {
        owner = msg.sender;
        montoObjetivo = _montoObjetivo;
        montoEtapa1 = _montoEtapa1;
        montoEtapa2 = _montoEtapa2;
        beneficiario1 = _beneficiario1;
        beneficiario2 = _beneficiario2;
        walletAutorizante1 = _walletAutorizante1;
        walletAutorizante2 = _walletAutorizante2;
        walletAutorizante3 = _walletAutorizante3;
        walletAutorizante4 = _walletAutorizante4;
    }

    receive() external payable {
        donar();
    }

    function donar() public payable etapaNoCompletada("Etapa1") etapaNoCompletada("Etapa2") {
        require(msg.value > 0, "La donación debe ser mayor que cero");

        donaciones[msg.sender] += msg.value;
        montoTotal += msg.value;

        emit DonacionRecibida(msg.sender, msg.value);

        // Verificar si se completó la Etapa1
        if (montoTotal >= montoEtapa1) {
            completarEtapa("Etapa1", beneficiario1, montoEtapa1);
        }

        // Verificar si se completó la Etapa2
        if (etapa1Completada && montoTotal >= montoEtapa2) {
            completarEtapa("Etapa2", beneficiario2, montoEtapa2);
        }
    }

    function completarEtapa(
        string memory etapa,
        address beneficiario,
        uint256 monto
    ) private soloPropietario etapaNoCompletada(etapa) {
        if (keccak256(abi.encodePacked(etapa)) == keccak256(abi.encodePacked("Etapa1"))) {
            require(
                firmasValidas(walletAutorizante1, walletAutorizante2),
                "Se requieren firmas válidas para completar la Etapa1"
            );
            etapa1Completada = true;
        } else if (keccak256(abi.encodePacked(etapa)) == keccak256(abi.encodePacked("Etapa2"))) {
            require(
                firmasValidas(walletAutorizante3, walletAutorizante4),
                "Se requieren firmas válidas para completar la Etapa2"
            );
            etapa2Completada = true;
        }

        emit EtapaCompletada(etapa, beneficiario, monto);

        // Transferir fondos al beneficiario al completar la etapa
        payable(beneficiario).transfer(monto);
    }

    function firmasValidas(address firma1, address firma2) private view returns (bool) {
        return (donaciones[firma1] > 0 && donaciones[firma2] > 0);
    }
}
