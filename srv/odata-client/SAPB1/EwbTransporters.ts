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
import { EwbTransporterLine } from './EwbTransporterLine';
import type { EwbTransportersApi } from './EwbTransportersApi';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';

/**
 * This class represents the entity "EWBTransporters" of service "SAPB1".
 */
export class EwbTransporters<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements EwbTransportersType<T>
{
  /**
   * Technical entity name for EwbTransporters.
   */
  static _entityName = 'EWBTransporters';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the EwbTransporters entity
   */
  static _keys = ['AbsEntry'];
  /**
   * Abs Entry.
   */
  absEntry!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Transporter Code.
   * @nullable
   */
  transporterCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transporter Name.
   * @nullable
   */
  transporterName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transporter Id.
   * @nullable
   */
  transporterId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ewb Transporter Lines.
   * @nullable
   */
  ewbTransporterLines?: EwbTransporterLine<T>[] | null;
  /**
   * One-to-many navigation property to the {@link BusinessPartners} entity.
   */
  businessPartners!: BusinessPartners<T>[];

  constructor(readonly _entityApi: EwbTransportersApi<T>) {
    super(_entityApi);
  }
}

export interface EwbTransportersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  absEntry: DeserializedType<T, 'Edm.Int32'>;
  transporterCode?: DeserializedType<T, 'Edm.String'> | null;
  transporterName?: DeserializedType<T, 'Edm.String'> | null;
  transporterId?: DeserializedType<T, 'Edm.String'> | null;
  ewbTransporterLines?: EwbTransporterLine<T>[] | null;
  businessPartners: BusinessPartnersType<T>[];
}
