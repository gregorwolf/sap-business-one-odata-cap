/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * BusinessPartnerPropertyParams
 */
export interface BusinessPartnerPropertyParams {
  /**
   * Property Code.
   * @nullable
   */
  propertyCode?: number;
  /**
   * Property Name.
   * @nullable
   */
  propertyName?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[BusinessPartnerPropertyParams.build]] instead.
 */
export function createBusinessPartnerPropertyParams(json: any): BusinessPartnerPropertyParams {
  return BusinessPartnerPropertyParams.build(json);
}

/**
 * BusinessPartnerPropertyParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BusinessPartnerPropertyParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BusinessPartnerPropertyParams> {
  /**
   * Representation of the [[BusinessPartnerPropertyParams.propertyCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  propertyCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PropertyCode', this, 'Edm.Int32');
  /**
   * Representation of the [[BusinessPartnerPropertyParams.propertyName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  propertyName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PropertyName', this, 'Edm.String');

  /**
   * Creates an instance of BusinessPartnerPropertyParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, BusinessPartnerPropertyParams);
  }
}

export namespace BusinessPartnerPropertyParams {
  /**
   * Metadata information on all properties of the `BusinessPartnerPropertyParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BusinessPartnerPropertyParams>[] = [{
    originalName: 'PropertyCode',
    name: 'propertyCode',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'PropertyName',
    name: 'propertyName',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): BusinessPartnerPropertyParams {
    return deserializeComplexTypeV4(json, BusinessPartnerPropertyParams);
  }
}
