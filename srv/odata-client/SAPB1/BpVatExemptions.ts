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
import { BpVatExemptionsLine } from './BpVatExemptionsLine';
import type { BpVatExemptionsApi } from './BpVatExemptionsApi';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';

/**
 * This class represents the entity "BPVatExemptions" of service "SAPB1".
 */
export class BpVatExemptions<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BpVatExemptionsType<T>
{
  /**
   * Technical entity name for BpVatExemptions.
   */
  static _entityName = 'BPVatExemptions';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the BpVatExemptions entity
   */
  static _keys = ['AbsoluteEntry'];
  /**
   * Absolute Entry.
   */
  absoluteEntry!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Bp Code.
   * @nullable
   */
  bpCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bp Vat Exemptions Lines.
   * @nullable
   */
  bpVatExemptionsLines?: BpVatExemptionsLine<T>[] | null;
  /**
   * One-to-one navigation property to the {@link BusinessPartners} entity.
   */
  businessPartner?: BusinessPartners<T> | null;

  constructor(readonly _entityApi: BpVatExemptionsApi<T>) {
    super(_entityApi);
  }
}

export interface BpVatExemptionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  absoluteEntry: DeserializedType<T, 'Edm.Int32'>;
  bpCode?: DeserializedType<T, 'Edm.String'> | null;
  remarks?: DeserializedType<T, 'Edm.String'> | null;
  bpVatExemptionsLines?: BpVatExemptionsLine<T>[] | null;
  businessPartner?: BusinessPartnersType<T> | null;
}
