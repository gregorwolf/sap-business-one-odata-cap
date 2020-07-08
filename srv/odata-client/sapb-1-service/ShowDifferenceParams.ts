/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * ShowDifferenceParams
 */
export interface ShowDifferenceParams {
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
  /**
   * Log Instance 2.
   * @nullable
   */
  logInstance2?: number;
  /**
   * Log Instance.
   * @nullable
   */
  logInstance?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[ShowDifferenceParams.build]] instead.
 */
export function createShowDifferenceParams(json: any): ShowDifferenceParams {
  return ShowDifferenceParams.build(json);
}

/**
 * ShowDifferenceParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ShowDifferenceParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ShowDifferenceParams.primaryKey]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  primaryKey: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PrimaryKey', this, 'Edm.String');
  /**
   * Representation of the [[ShowDifferenceParams.udoObjectCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  udoObjectCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('UDOObjectCode', this, 'Edm.String');
  /**
   * Representation of the [[ShowDifferenceParams.logInstance2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  logInstance2: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LogInstance2', this, 'Edm.Int32');
  /**
   * Representation of the [[ShowDifferenceParams.logInstance]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  logInstance: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LogInstance', this, 'Edm.Int32');
}

export namespace ShowDifferenceParams {
  export function build(json: { [keys: string]: FieldType }): ShowDifferenceParams {
    return createComplexType(json, {
      PrimaryKey: (primaryKey: string) => ({ primaryKey: edmToTs(primaryKey, 'Edm.String') }),
      UDOObjectCode: (udoObjectCode: string) => ({ udoObjectCode: edmToTs(udoObjectCode, 'Edm.String') }),
      LogInstance2: (logInstance2: number) => ({ logInstance2: edmToTs(logInstance2, 'Edm.Int32') }),
      LogInstance: (logInstance: number) => ({ logInstance: edmToTs(logInstance, 'Edm.Int32') })
    });
  }
}
