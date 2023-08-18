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
import type { BankChargesAllocationCodesApi } from './BankChargesAllocationCodesApi';
import { PaymentRunExport, PaymentRunExportType } from './PaymentRunExport';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';

/**
 * This class represents the entity "BankChargesAllocationCodes" of service "SAPB1".
 */
export class BankChargesAllocationCodes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BankChargesAllocationCodesType<T>
{
  /**
   * Technical entity name for BankChargesAllocationCodes.
   */
  static _entityName = 'BankChargesAllocationCodes';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the BankChargesAllocationCodes entity
   */
  static _keys = ['Code'];
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
   * One-to-many navigation property to the {@link PaymentRunExport} entity.
   */
  paymentRunExport!: PaymentRunExport<T>[];
  /**
   * One-to-many navigation property to the {@link BusinessPartners} entity.
   */
  businessPartners!: BusinessPartners<T>[];

  constructor(readonly _entityApi: BankChargesAllocationCodesApi<T>) {
    super(_entityApi);
  }
}

export interface BankChargesAllocationCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  paymentRunExport: PaymentRunExportType<T>[];
  businessPartners: BusinessPartnersType<T>[];
}
