/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * DepreciationTypeParams
 */
export interface DepreciationTypeParams {
  /**
   * Code.
   * @nullable
   */
  code?: string;
  /**
   * Description.
   * @nullable
   */
  description?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[DepreciationTypeParams.build]] instead.
 */
export function createDepreciationTypeParams(json: any): DepreciationTypeParams {
  return DepreciationTypeParams.build(json);
}

/**
 * DepreciationTypeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class DepreciationTypeParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, DepreciationTypeParams> {
  /**
   * Representation of the [[DepreciationTypeParams.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Code', this, 'Edm.String');
  /**
   * Representation of the [[DepreciationTypeParams.description]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  description: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Description', this, 'Edm.String');

  /**
   * Creates an instance of DepreciationTypeParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, DepreciationTypeParams);
  }
}

export namespace DepreciationTypeParams {
  /**
   * Metadata information on all properties of the `DepreciationTypeParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DepreciationTypeParams>[] = [{
    originalName: 'Code',
    name: 'code',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Description',
    name: 'description',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): DepreciationTypeParams {
    return deserializeComplexTypeV4(json, DepreciationTypeParams);
  }
}
