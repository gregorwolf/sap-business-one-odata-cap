/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoChangeLogEnum } from './BoChangeLogEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
   * Object.
   * @nullable
   */
  object?: BoChangeLogEnum;
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
export class ShowDifferenceParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ShowDifferenceParams> {
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
   * Representation of the [[ShowDifferenceParams.object]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  object: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Object', this);
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

  /**
   * Creates an instance of ShowDifferenceParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ShowDifferenceParams);
  }
}

export namespace ShowDifferenceParams {
  /**
   * Metadata information on all properties of the `ShowDifferenceParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ShowDifferenceParams>[] = [{
    originalName: 'PrimaryKey',
    name: 'primaryKey',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'UDOObjectCode',
    name: 'udoObjectCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Object',
    name: 'object',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'LogInstance2',
    name: 'logInstance2',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'LogInstance',
    name: 'logInstance',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ShowDifferenceParams {
    return deserializeComplexTypeV4(json, ShowDifferenceParams);
  }
}
