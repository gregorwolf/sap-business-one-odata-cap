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
import { InternalReconciliationRow } from './InternalReconciliationRow';
import { ElectronicProtocol } from './ElectronicProtocol';
import type { InternalReconciliationsApi } from './InternalReconciliationsApi';
import { CardOrAccountEnum } from './CardOrAccountEnum';
import { ReconTypeEnum } from './ReconTypeEnum';

/**
 * This class represents the entity "InternalReconciliations" of service "SAPB1".
 */
export class InternalReconciliations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InternalReconciliationsType<T>
{
  /**
   * Technical entity name for InternalReconciliations.
   */
  static _entityName = 'InternalReconciliations';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the InternalReconciliations entity
   */
  static _keys = ['ReconNum'];
  /**
   * Recon Num.
   */
  reconNum!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Recon Date.
   * @nullable
   */
  reconDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Card Or Account.
   * @nullable
   */
  cardOrAccount?: CardOrAccountEnum | null;
  /**
   * Recon Type.
   * @nullable
   */
  reconType?: ReconTypeEnum | null;
  /**
   * Total.
   * @nullable
   */
  total?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Cancel Abs.
   * @nullable
   */
  cancelAbs?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Internal Reconciliation Rows.
   * @nullable
   */
  internalReconciliationRows?: InternalReconciliationRow<T>[] | null;
  /**
   * Electronic Protocols.
   * @nullable
   */
  electronicProtocols?: ElectronicProtocol<T>[] | null;

  constructor(readonly _entityApi: InternalReconciliationsApi<T>) {
    super(_entityApi);
  }
}

export interface InternalReconciliationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  reconNum: DeserializedType<T, 'Edm.Int32'>;
  reconDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  cardOrAccount?: CardOrAccountEnum | null;
  reconType?: ReconTypeEnum | null;
  total?: DeserializedType<T, 'Edm.Double'> | null;
  cancelAbs?: DeserializedType<T, 'Edm.Int32'> | null;
  internalReconciliationRows?: InternalReconciliationRow<T>[] | null;
  electronicProtocols?: ElectronicProtocol<T>[] | null;
}
