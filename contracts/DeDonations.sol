// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DeDonations {
    address public owner;
    address public beneficiario;
    uint256 public montoTotal;
    mapping(address => bool) public firmas;

    event DonacionRecibida(address donante, uint256 monto);
    event TransaccionFirmada(address firmante);

    modifier soloPropietario() {
        require(msg.sender == owner, "Solo el propietario puede realizar esta operación");
        _;
    }

    modifier soloBeneficiario() {
        require(msg.sender == beneficiario, "Solo el beneficiario puede realizar esta operación");
        _;
    }

    modifier donacionCompleta() {
        require(address(this).balance == montoTotal, "La donación aún no está completa");
        _;
    }

    constructor(address _beneficiario) {
        owner = msg.sender;
        beneficiario = _beneficiario;
    }

    receive() external payable {
        require(msg.value > 0, "La donación debe ser mayor que cero");
        montoTotal += msg.value;
        emit DonacionRecibida(msg.sender, msg.value);
    }

    function firmarTransaccion() external soloBeneficiario {
        require(!firmas[msg.sender], "La firma ya ha sido registrada");
        firmas[msg.sender] = true;
        emit TransaccionFirmada(msg.sender);

        // Verificar si ambas firmas han sido registradas
        if (firmas[owner] && firmas[beneficiario]) {
            transferirFondos();
        }
    }

    function transferirFondos() private donacionCompleta {
        // Transferir fondos al beneficiario
        payable(beneficiario).transfer(montoTotal);
    }
}
