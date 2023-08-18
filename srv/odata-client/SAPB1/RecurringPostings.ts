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
import { RecurringPostingsLine } from './RecurringPostingsLine';
import { RecurringPostingsDocumentReference } from './RecurringPostingsDocumentReference';
import type { RecurringPostingsApi } from './RecurringPostingsApi';
import { BoFrequencyTypeEnum } from './BoFrequencyTypeEnum';
import { BoSubFrequencyTypeEnum } from './BoSubFrequencyTypeEnum';
import { BoYesNoEnum } from './BoYesNoEnum';

/**
 * This class represents the entity "RecurringPostings" of service "SAPB1".
 */
export class RecurringPostings<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RecurringPostingsType<T>
{
  /**
   * Technical entity name for RecurringPostings.
   */
  static _entityName = 'RecurringPostings';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the RecurringPostings entity
   */
  static _keys = ['Code', 'Instance'];
  /**
   * Code.
   */
  code!: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Instance.
   */
  instance!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Reference 1.
   * @nullable
   */
  reference1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reference 2.
   * @nullable
   */
  reference2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reference 3.
   * @nullable
   */
  reference3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Code.
   * @nullable
   */
  transactionCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Frequency.
   * @nullable
   */
  frequency?: BoFrequencyTypeEnum | null;
  /**
   * Sub Frequency.
   * @nullable
   */
  subFrequency?: BoSubFrequencyTypeEnum | null;
  /**
   * Next Execution.
   * @nullable
   */
  nextExecution?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Stamp Tax.
   * @nullable
   */
  stampTax?: BoYesNoEnum | null;
  /**
   * Automatic Vat.
   * @nullable
   */
  automaticVat?: BoYesNoEnum | null;
  /**
   * Manage W Tax.
   * @nullable
   */
  manageWTax?: BoYesNoEnum | null;
  /**
   * Deferred Tax.
   * @nullable
   */
  deferredTax?: BoYesNoEnum | null;
  /**
   * Valid Until.
   * @nullable
   */
  validUntil?: BoYesNoEnum | null;
  /**
   * Valid Until Date.
   * @nullable
   */
  validUntilDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Recurring Postings Line Collection.
   * @nullable
   */
  recurringPostingsLineCollection?: RecurringPostingsLine<T>[] | null;
  /**
   * Recurring Postings Document Reference Collection.
   * @nullable
   */
  recurringPostingsDocumentReferenceCollection?:
    | RecurringPostingsDocumentReference<T>[]
    | null;

  constructor(readonly _entityApi: RecurringPostingsApi<T>) {
    super(_entityApi);
  }
}

export interface RecurringPostingsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  instance: DeserializedType<T, 'Edm.Int32'>;
  reference1?: DeserializedType<T, 'Edm.String'> | null;
  reference2?: DeserializedType<T, 'Edm.String'> | null;
  reference3?: DeserializedType<T, 'Edm.String'> | null;
  transactionCode?: DeserializedType<T, 'Edm.String'> | null;
  remarks?: DeserializedType<T, 'Edm.String'> | null;
  frequency?: BoFrequencyTypeEnum | null;
  subFrequency?: BoSubFrequencyTypeEnum | null;
  nextExecution?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  stampTax?: BoYesNoEnum | null;
  automaticVat?: BoYesNoEnum | null;
  manageWTax?: BoYesNoEnum | null;
  deferredTax?: BoYesNoEnum | null;
  validUntil?: BoYesNoEnum | null;
  validUntilDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  recurringPostingsLineCollection?: RecurringPostingsLine<T>[] | null;
  recurringPostingsDocumentReferenceCollection?:
    | RecurringPostingsDocumentReference<T>[]
    | null;
}
