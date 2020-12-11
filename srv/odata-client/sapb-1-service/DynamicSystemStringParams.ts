/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * DynamicSystemStringParams
 */
export interface DynamicSystemStringParams {
  /**
   * Form Id.
   * @nullable
   */
  formId?: string;
  /**
   * Item Id.
   * @nullable
   */
  itemId?: string;
  /**
   * Column Id.
   * @nullable
   */
  columnId?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[DynamicSystemStringParams.build]] instead.
 */
export function createDynamicSystemStringParams(json: any): DynamicSystemStringParams {
  return DynamicSystemStringParams.build(json);
}

/**
 * DynamicSystemStringParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class DynamicSystemStringParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, DynamicSystemStringParams> {
  /**
   * Representation of the [[DynamicSystemStringParams.formId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  formId: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FormID', this, 'Edm.String');
  /**
   * Representation of the [[DynamicSystemStringParams.itemId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemId: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ItemID', this, 'Edm.String');
  /**
   * Representation of the [[DynamicSystemStringParams.columnId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  columnId: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ColumnID', this, 'Edm.String');

  /**
   * Creates an instance of DynamicSystemStringParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, DynamicSystemStringParams);
  }
}

export namespace DynamicSystemStringParams {
  /**
   * Metadata information on all properties of the `DynamicSystemStringParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DynamicSystemStringParams>[] = [{
    originalName: 'FormID',
    name: 'formId',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ItemID',
    name: 'itemId',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ColumnID',
    name: 'columnId',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): DynamicSystemStringParams {
    return deserializeComplexTypeV4(json, DynamicSystemStringParams);
  }
}
