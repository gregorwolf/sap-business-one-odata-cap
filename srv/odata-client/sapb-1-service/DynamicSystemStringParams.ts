/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class DynamicSystemStringParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}

export namespace DynamicSystemStringParams {
  export function build(json: { [keys: string]: FieldType }): DynamicSystemStringParams {
    return createComplexType(json, {
      FormID: (formId: string) => ({ formId: edmToTs(formId, 'Edm.String') }),
      ItemID: (itemId: string) => ({ itemId: edmToTs(itemId, 'Edm.String') }),
      ColumnID: (columnId: string) => ({ columnId: edmToTs(columnId, 'Edm.String') })
    });
  }
}
