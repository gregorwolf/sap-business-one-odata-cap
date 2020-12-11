/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * BinLocationAttributeParams
 */
export interface BinLocationAttributeParams {
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: number;
  /**
   * Attribute.
   * @nullable
   */
  attribute?: number;
  /**
   * Code.
   * @nullable
   */
  code?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[BinLocationAttributeParams.build]] instead.
 */
export function createBinLocationAttributeParams(json: any): BinLocationAttributeParams {
  return BinLocationAttributeParams.build(json);
}

/**
 * BinLocationAttributeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BinLocationAttributeParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BinLocationAttributeParams> {
  /**
   * Representation of the [[BinLocationAttributeParams.absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[BinLocationAttributeParams.attribute]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attribute: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Attribute', this, 'Edm.Int32');
  /**
   * Representation of the [[BinLocationAttributeParams.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Code', this, 'Edm.String');

  /**
   * Creates an instance of BinLocationAttributeParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, BinLocationAttributeParams);
  }
}

export namespace BinLocationAttributeParams {
  /**
   * Metadata information on all properties of the `BinLocationAttributeParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BinLocationAttributeParams>[] = [{
    originalName: 'AbsEntry',
    name: 'absEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Attribute',
    name: 'attribute',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Code',
    name: 'code',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): BinLocationAttributeParams {
    return deserializeComplexTypeV4(json, BinLocationAttributeParams);
  }
}
