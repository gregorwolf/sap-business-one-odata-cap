/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * ChangeLogDifferenceParams
 */
export interface ChangeLogDifferenceParams {
  /**
   * Date.
   * @nullable
   */
  date?: Moment;
  /**
   * Changed Field.
   * @nullable
   */
  changedField?: string;
  /**
   * Old Value.
   * @nullable
   */
  oldValue?: string;
  /**
   * New Value.
   * @nullable
   */
  newValue?: string;
  /**
   * User Name.
   * @nullable
   */
  userName?: string;
  /**
   * Array Offset.
   * @nullable
   */
  arrayOffset?: number;
  /**
   * Line Number.
   * @nullable
   */
  lineNumber?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[ChangeLogDifferenceParams.build]] instead.
 */
export function createChangeLogDifferenceParams(json: any): ChangeLogDifferenceParams {
  return ChangeLogDifferenceParams.build(json);
}

/**
 * ChangeLogDifferenceParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ChangeLogDifferenceParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ChangeLogDifferenceParams> {
  /**
   * Representation of the [[ChangeLogDifferenceParams.date]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  date: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('Date', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[ChangeLogDifferenceParams.changedField]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  changedField: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ChangedField', this, 'Edm.String');
  /**
   * Representation of the [[ChangeLogDifferenceParams.oldValue]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  oldValue: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('OldValue', this, 'Edm.String');
  /**
   * Representation of the [[ChangeLogDifferenceParams.newValue]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  newValue: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('NewValue', this, 'Edm.String');
  /**
   * Representation of the [[ChangeLogDifferenceParams.userName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  userName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('UserName', this, 'Edm.String');
  /**
   * Representation of the [[ChangeLogDifferenceParams.arrayOffset]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  arrayOffset: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ArrayOffset', this, 'Edm.Int32');
  /**
   * Representation of the [[ChangeLogDifferenceParams.lineNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('LineNumber', this, 'Edm.String');

  /**
   * Creates an instance of ChangeLogDifferenceParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ChangeLogDifferenceParams);
  }
}

export namespace ChangeLogDifferenceParams {
  /**
   * Metadata information on all properties of the `ChangeLogDifferenceParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ChangeLogDifferenceParams>[] = [{
    originalName: 'Date',
    name: 'date',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'ChangedField',
    name: 'changedField',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'OldValue',
    name: 'oldValue',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'NewValue',
    name: 'newValue',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'UserName',
    name: 'userName',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ArrayOffset',
    name: 'arrayOffset',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'LineNumber',
    name: 'lineNumber',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ChangeLogDifferenceParams {
    return deserializeComplexTypeV4(json, ChangeLogDifferenceParams);
  }
}
