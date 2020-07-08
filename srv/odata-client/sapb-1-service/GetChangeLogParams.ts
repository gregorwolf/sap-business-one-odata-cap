/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * GetChangeLogParams
 */
export interface GetChangeLogParams {
  /**
   * Primary Key.
   * @nullable
   */
  primaryKey?: string;
  /**
   * Udo Object Code.
   * @nullable
   */
  udoObjectCode?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[GetChangeLogParams.build]] instead.
 */
export function createGetChangeLogParams(json: any): GetChangeLogParams {
  return GetChangeLogParams.build(json);
}

/**
 * GetChangeLogParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class GetChangeLogParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[GetChangeLogParams.primaryKey]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  primaryKey: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PrimaryKey', this, 'Edm.String');
  /**
   * Representation of the [[GetChangeLogParams.udoObjectCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  udoObjectCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('UDOObjectCode', this, 'Edm.String');
}

export namespace GetChangeLogParams {
  export function build(json: { [keys: string]: FieldType }): GetChangeLogParams {
    return createComplexType(json, {
      PrimaryKey: (primaryKey: string) => ({ primaryKey: edmToTs(primaryKey, 'Edm.String') }),
      UDOObjectCode: (udoObjectCode: string) => ({ udoObjectCode: edmToTs(udoObjectCode, 'Edm.String') })
    });
  }
}
