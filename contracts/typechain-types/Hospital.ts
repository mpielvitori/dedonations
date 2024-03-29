/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface HospitalInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "beneficiario1"
      | "beneficiario2"
      | "donaciones"
      | "donar"
      | "etapa1Completada"
      | "etapa2Completada"
      | "montoEtapa1"
      | "montoEtapa2"
      | "montoObjetivo"
      | "montoTotal"
      | "owner"
      | "walletAutorizante1"
      | "walletAutorizante2"
      | "walletAutorizante3"
      | "walletAutorizante4"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "DonacionRecibida" | "EtapaCompletada"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "beneficiario1",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "beneficiario2",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "donaciones",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "donar", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "etapa1Completada",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "etapa2Completada",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "montoEtapa1",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "montoEtapa2",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "montoObjetivo",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "montoTotal",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "walletAutorizante1",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "walletAutorizante2",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "walletAutorizante3",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "walletAutorizante4",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "beneficiario1",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "beneficiario2",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "donaciones", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "donar", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "etapa1Completada",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "etapa2Completada",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "montoEtapa1",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "montoEtapa2",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "montoObjetivo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "montoTotal", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "walletAutorizante1",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "walletAutorizante2",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "walletAutorizante3",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "walletAutorizante4",
    data: BytesLike
  ): Result;
}

export namespace DonacionRecibidaEvent {
  export type InputTuple = [donante: AddressLike, monto: BigNumberish];
  export type OutputTuple = [donante: string, monto: bigint];
  export interface OutputObject {
    donante: string;
    monto: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace EtapaCompletadaEvent {
  export type InputTuple = [
    etapa: string,
    beneficiario: AddressLike,
    monto: BigNumberish
  ];
  export type OutputTuple = [
    etapa: string,
    beneficiario: string,
    monto: bigint
  ];
  export interface OutputObject {
    etapa: string;
    beneficiario: string;
    monto: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Hospital extends BaseContract {
  connect(runner?: ContractRunner | null): Hospital;
  waitForDeployment(): Promise<this>;

  interface: HospitalInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  beneficiario1: TypedContractMethod<[], [string], "view">;

  beneficiario2: TypedContractMethod<[], [string], "view">;

  donaciones: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  donar: TypedContractMethod<[], [void], "payable">;

  etapa1Completada: TypedContractMethod<[], [boolean], "view">;

  etapa2Completada: TypedContractMethod<[], [boolean], "view">;

  montoEtapa1: TypedContractMethod<[], [bigint], "view">;

  montoEtapa2: TypedContractMethod<[], [bigint], "view">;

  montoObjetivo: TypedContractMethod<[], [bigint], "view">;

  montoTotal: TypedContractMethod<[], [bigint], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  walletAutorizante1: TypedContractMethod<[], [string], "view">;

  walletAutorizante2: TypedContractMethod<[], [string], "view">;

  walletAutorizante3: TypedContractMethod<[], [string], "view">;

  walletAutorizante4: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "beneficiario1"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "beneficiario2"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "donaciones"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "donar"
  ): TypedContractMethod<[], [void], "payable">;
  getFunction(
    nameOrSignature: "etapa1Completada"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "etapa2Completada"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "montoEtapa1"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "montoEtapa2"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "montoObjetivo"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "montoTotal"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "walletAutorizante1"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "walletAutorizante2"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "walletAutorizante3"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "walletAutorizante4"
  ): TypedContractMethod<[], [string], "view">;

  getEvent(
    key: "DonacionRecibida"
  ): TypedContractEvent<
    DonacionRecibidaEvent.InputTuple,
    DonacionRecibidaEvent.OutputTuple,
    DonacionRecibidaEvent.OutputObject
  >;
  getEvent(
    key: "EtapaCompletada"
  ): TypedContractEvent<
    EtapaCompletadaEvent.InputTuple,
    EtapaCompletadaEvent.OutputTuple,
    EtapaCompletadaEvent.OutputObject
  >;

  filters: {
    "DonacionRecibida(address,uint256)": TypedContractEvent<
      DonacionRecibidaEvent.InputTuple,
      DonacionRecibidaEvent.OutputTuple,
      DonacionRecibidaEvent.OutputObject
    >;
    DonacionRecibida: TypedContractEvent<
      DonacionRecibidaEvent.InputTuple,
      DonacionRecibidaEvent.OutputTuple,
      DonacionRecibidaEvent.OutputObject
    >;

    "EtapaCompletada(string,address,uint256)": TypedContractEvent<
      EtapaCompletadaEvent.InputTuple,
      EtapaCompletadaEvent.OutputTuple,
      EtapaCompletadaEvent.OutputObject
    >;
    EtapaCompletada: TypedContractEvent<
      EtapaCompletadaEvent.InputTuple,
      EtapaCompletadaEvent.OutputTuple,
      EtapaCompletadaEvent.OutputObject
    >;
  };
}
