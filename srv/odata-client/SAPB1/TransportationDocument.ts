/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import { TransportationDocumentLineData } from './TransportationDocumentLineData';
import { ElectronicProtocol } from './ElectronicProtocol';
import type { TransportationDocumentApi } from './TransportationDocumentApi';
import { ElectronicDocGenTypeEnum } from './ElectronicDocGenTypeEnum';
import { BoYesNoEnum } from './BoYesNoEnum';

/**
 * This class represents the entity "TransportationDocument" of service "SAPB1".
 */
export class TransportationDocument<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TransportationDocumentType<T>
{
  /**
   * Technical entity name for TransportationDocument.
   */
  static _entityName = 'TransportationDocument';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the TransportationDocument entity
   */
  static _keys = ['TranspDocNumber'];
  /**
   * Transp Doc Number.
   */
  transpDocNumber!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Next Number.
   * @nullable
   */
  nextNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Post Date.
   * @nullable
   */
  postDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * El Doc Gen Type.
   * @nullable
   */
  elDocGenType?: ElectronicDocGenTypeEnum | null;
  /**
   * El Doc Export Format.
   * @nullable
   */
  elDocExportFormat?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Transportation Number.
   * @nullable
   */
  transportationNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Expiration Date.
   * @nullable
   */
  expirationDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Vehicle Id.
   * @nullable
   */
  vehicleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trailer Id.
   * @nullable
   */
  trailerId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Carrier Code.
   * @nullable
   */
  carrierCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Issue Gate.
   * @nullable
   */
  issueGate?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Attachment Entry.
   * @nullable
   */
  attachmentEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Canceled.
   * @nullable
   */
  canceled?: BoYesNoEnum | null;
  /**
   * Weight.
   * @nullable
   */
  weight?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Weight Unit.
   * @nullable
   */
  weightUnit?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Transported Total Lc.
   * @nullable
   */
  transportedTotalLc?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Warehouse Code.
   * @nullable
   */
  warehouseCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cot Code.
   * @nullable
   */
  cotCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transportation Document Line Data Collection.
   * @nullable
   */
  transportationDocumentLineDataCollection?:
    | TransportationDocumentLineData<T>[]
    | null;
  /**
   * Electronic Protocols.
   * @nullable
   */
  electronicProtocols?: ElectronicProtocol<T>[] | null;

  constructor(readonly _entityApi: TransportationDocumentApi<T>) {
    super(_entityApi);
  }
}

export interface TransportationDocumentType<
  T extends DeSerializers = DefaultDeSerializers
> {
  transpDocNumber: DeserializedType<T, 'Edm.Int32'>;
  nextNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  postDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  elDocGenType?: ElectronicDocGenTypeEnum | null;
  elDocExportFormat?: DeserializedType<T, 'Edm.Int32'> | null;
  transportationNumber?: DeserializedType<T, 'Edm.String'> | null;
  expirationDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  vehicleId?: DeserializedType<T, 'Edm.String'> | null;
  trailerId?: DeserializedType<T, 'Edm.String'> | null;
  carrierCode?: DeserializedType<T, 'Edm.String'> | null;
  issueGate?: DeserializedType<T, 'Edm.Int32'> | null;
  attachmentEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  canceled?: BoYesNoEnum | null;
  weight?: DeserializedType<T, 'Edm.Double'> | null;
  weightUnit?: DeserializedType<T, 'Edm.Int32'> | null;
  transportedTotalLc?: DeserializedType<T, 'Edm.Double'> | null;
  warehouseCode?: DeserializedType<T, 'Edm.String'> | null;
  cotCode?: DeserializedType<T, 'Edm.String'> | null;
  transportationDocumentLineDataCollection?:
    | TransportationDocumentLineData<T>[]
    | null;
  electronicProtocols?: ElectronicProtocol<T>[] | null;
}
