/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * SalesTaxAuthorityParams
 */
export interface SalesTaxAuthorityParams {
  /**
   * Code.
   * @nullable
   */
  code?: string;
  /**
   * Type.
   * @nullable
   */
  type?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[SalesTaxAuthorityParams.build]] instead.
 */
export function createSalesTaxAuthorityParams(json: any): SalesTaxAuthorityParams {
  return SalesTaxAuthorityParams.build(json);
}

/**
 * SalesTaxAuthorityParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class SalesTaxAuthorityParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, SalesTaxAuthorityParams> {
  /**
   * Representation of the [[SalesTaxAuthorityParams.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Code', this, 'Edm.String');
  /**
   * Representation of the [[SalesTaxAuthorityParams.type]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  type: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Type', this, 'Edm.Int32');

  /**
   * Creates an instance of SalesTaxAuthorityParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, SalesTaxAuthorityParams);
  }
}

export namespace SalesTaxAuthorityParams {
  /**
   * Metadata information on all properties of the `SalesTaxAuthorityParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<SalesTaxAuthorityParams>[] = [{
    originalName: 'Code',
    name: 'code',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Type',
    name: 'type',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): SalesTaxAuthorityParams {
    return deserializeComplexTypeV4(json, SalesTaxAuthorityParams);
  }
}
