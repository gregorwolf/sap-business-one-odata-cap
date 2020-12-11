/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * BusinessPartnerParams
 */
export interface BusinessPartnerParams {
  /**
   * Card Code.
   * @nullable
   */
  cardCode?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[BusinessPartnerParams.build]] instead.
 */
export function createBusinessPartnerParams(json: any): BusinessPartnerParams {
  return BusinessPartnerParams.build(json);
}

/**
 * BusinessPartnerParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BusinessPartnerParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BusinessPartnerParams> {
  /**
   * Representation of the [[BusinessPartnerParams.cardCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cardCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CardCode', this, 'Edm.String');

  /**
   * Creates an instance of BusinessPartnerParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, BusinessPartnerParams);
  }
}

export namespace BusinessPartnerParams {
  /**
   * Metadata information on all properties of the `BusinessPartnerParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BusinessPartnerParams>[] = [{
    originalName: 'CardCode',
    name: 'cardCode',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): BusinessPartnerParams {
    return deserializeComplexTypeV4(json, BusinessPartnerParams);
  }
}
