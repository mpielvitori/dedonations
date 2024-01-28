// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CampaignDonacion {
    address public owner;
    uint256 public montoObjetivo;
    uint256 public montoActual;
    uint256 public donantesCount;
    bool public fondosLiberados;

    mapping(address => uint256) public donaciones;
    mapping(address => bool) public validacionKYC;
    mapping(address => bool) public firmas;

    event DonacionRecibida(address donante, uint256 monto);
    event AutorizacionFirmada(address firmante);
    event FondosLiberados(uint256 monto);

    modifier soloPropietario() {
        require(msg.sender == owner, "Solo el propietario puede realizar esta operación");
        _;
    }

    modifier fondosNoLiberados() {
        require(!fondosLiberados, "Los fondos ya han sido liberados");
        _;
    }

    modifier objetivoAlcanzado() {
        require(montoActual >= montoObjetivo, "El objetivo de la donación no ha sido alcanzado");
        _;
    }

    modifier esValidadoKYC() {
        require(validacionKYC[msg.sender], "El donante no ha sido validado por KYC");
        _;
    }

    constructor(uint256 _montoObjetivo) {
        owner = msg.sender;
        montoObjetivo = _montoObjetivo;
    }

    receive() external payable {
        donar();
    }

    function donar() public payable fondosNoLiberados {
        require(msg.value > 0, "La donación debe ser mayor que cero");

        donaciones[msg.sender] += msg.value;
        montoActual += msg.value;
        donantesCount++;

        emit DonacionRecibida(msg.sender, msg.value);

        if (montoActual >= montoObjetivo) {
            emit FondosLiberados(montoActual);
        }
    }

    function firmarAutorizacion() external esValidadoKYC {
        require(!firmas[msg.sender], "La firma ya ha sido registrada");
        firmas[msg.sender] = true;
        emit AutorizacionFirmada(msg.sender);

        // Verificar si todas las firmas han sido registradas
        if (firmas[address(0x01)] && firmas[address(0x02)] && firmas[address(0x03)]) {
            liberarFondos();
        }
    }

    function liberarFondos() private soloPropietario fondosNoLiberados objetivoAlcanzado {
        fondosLiberados = true;
        payable(owner).transfer(montoActual);
    }
}


crear un smart contract para el manejo de una campaña de donacion con solidity en donde 
* el smart contract reciba donaciones de distintas wallets
* almacene una referencia de la cantidad que dono cada wallet ya que luego esta información es necesaria para dar estadisticas de lo ingresado por cada donante, lo cual puede ser incremental a lo largo de la duración de la campaña
* el dinero debe almacenarse y este se debe ir liberando a medida que se lleguen a los montos definidos según cada etapa y destinatario establecida al momento de la creacion del contrato
# Ejemplo de campaña: 
* HospitalVilla
- monto requerido 100000 usdt
- en el momento en que la campaña reciba 50000 usdt, estos deben liberarse al beneficiario1 siempre que se cumpla la condicion que walletAutorizante1 y walletAutorizante2 firmen una transaccion
- en el momento en que la campaña reciba 50000 usdt, estos deben liberarse al beneficiario2 siempre que se cumpla la condicion que walletAutorizante3 y walletAutorizante4 firmen una transaccion
