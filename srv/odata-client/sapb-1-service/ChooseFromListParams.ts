/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class ChooseFromListParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}

export namespace ChooseFromListParams {
  export function build(json: { [keys: string]: FieldType }): ChooseFromListParams {
    return createComplexType(json, {
      ObjectName: (objectName: string) => ({ objectName: edmToTs(objectName, 'Edm.String') }),
      FieldIndex: (fieldIndex: number) => ({ fieldIndex: edmToTs(fieldIndex, 'Edm.Int32') })
    });
  }
}
