/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * BusinessPartnerGroupParams
 */
export interface BusinessPartnerGroupParams {
  /**
   * Code.
   * @nullable
   */
  code?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[BusinessPartnerGroupParams.build]] instead.
 */
export function createBusinessPartnerGroupParams(json: any): BusinessPartnerGroupParams {
  return BusinessPartnerGroupParams.build(json);
}

/**
 * BusinessPartnerGroupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BusinessPartnerGroupParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BusinessPartnerGroupParams> {
  /**
   * Representation of the [[BusinessPartnerGroupParams.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Code', this, 'Edm.Int32');

  /**
   * Creates an instance of BusinessPartnerGroupParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, BusinessPartnerGroupParams);
  }
}

export namespace BusinessPartnerGroupParams {
  /**
   * Metadata information on all properties of the `BusinessPartnerGroupParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BusinessPartnerGroupParams>[] = [{
    originalName: 'Code',
    name: 'code',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): BusinessPartnerGroupParams {
    return deserializeComplexTypeV4(json, BusinessPartnerGroupParams);
  }
}
