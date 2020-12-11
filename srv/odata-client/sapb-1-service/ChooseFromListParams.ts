/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * ChooseFromListParams
 */
export interface ChooseFromListParams {
  /**
   * Object Name.
   * @nullable
   */
  objectName?: string;
  /**
   * Field Index.
   * @nullable
   */
  fieldIndex?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[ChooseFromListParams.build]] instead.
 */
export function createChooseFromListParams(json: any): ChooseFromListParams {
  return ChooseFromListParams.build(json);
}

/**
 * ChooseFromListParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ChooseFromListParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ChooseFromListParams> {
  /**
   * Representation of the [[ChooseFromListParams.objectName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  objectName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ObjectName', this, 'Edm.String');
  /**
   * Representation of the [[ChooseFromListParams.fieldIndex]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fieldIndex: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('FieldIndex', this, 'Edm.Int32');

  /**
   * Creates an instance of ChooseFromListParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ChooseFromListParams);
  }
}

export namespace ChooseFromListParams {
  /**
   * Metadata information on all properties of the `ChooseFromListParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ChooseFromListParams>[] = [{
    originalName: 'ObjectName',
    name: 'objectName',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'FieldIndex',
    name: 'fieldIndex',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ChooseFromListParams {
    return deserializeComplexTypeV4(json, ChooseFromListParams);
  }
}
