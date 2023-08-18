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
import type { BusinessPartnerGroupsApi } from './BusinessPartnerGroupsApi';
import { BoBusinessPartnerGroupTypes } from './BoBusinessPartnerGroupTypes';
import {
  GlAccountAdvancedRules,
  GlAccountAdvancedRulesType
} from './GlAccountAdvancedRules';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';

/**
 * This class represents the entity "BusinessPartnerGroups" of service "SAPB1".
 */
export class BusinessPartnerGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BusinessPartnerGroupsType<T>
{
  /**
   * Technical entity name for BusinessPartnerGroups.
   */
  static _entityName = 'BusinessPartnerGroups';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the BusinessPartnerGroups entity
   */
  static _keys = ['Code'];
  /**
   * Code.
   */
  code!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Name.
   * @nullable
   */
  name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Type.
   * @nullable
   */
  type?: BoBusinessPartnerGroupTypes | null;
  /**
   * One-to-many navigation property to the {@link GlAccountAdvancedRules} entity.
   */
  glAccountAdvancedRules!: GlAccountAdvancedRules<T>[];
  /**
   * One-to-many navigation property to the {@link BusinessPartners} entity.
   */
  businessPartners!: BusinessPartners<T>[];

  constructor(readonly _entityApi: BusinessPartnerGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface BusinessPartnerGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.Int32'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  type?: BoBusinessPartnerGroupTypes | null;
  glAccountAdvancedRules: GlAccountAdvancedRulesType<T>[];
  businessPartners: BusinessPartnersType<T>[];
}
