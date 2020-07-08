/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class ChangeLogDifferenceParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}

export namespace ChangeLogDifferenceParams {
  export function build(json: { [keys: string]: FieldType }): ChangeLogDifferenceParams {
    return createComplexType(json, {
      Date: (date: Moment) => ({ date: edmToTs(date, 'Edm.DateTimeOffset') }),
      ChangedField: (changedField: string) => ({ changedField: edmToTs(changedField, 'Edm.String') }),
      OldValue: (oldValue: string) => ({ oldValue: edmToTs(oldValue, 'Edm.String') }),
      NewValue: (newValue: string) => ({ newValue: edmToTs(newValue, 'Edm.String') }),
      UserName: (userName: string) => ({ userName: edmToTs(userName, 'Edm.String') }),
      ArrayOffset: (arrayOffset: number) => ({ arrayOffset: edmToTs(arrayOffset, 'Edm.Int32') }),
      LineNumber: (lineNumber: string) => ({ lineNumber: edmToTs(lineNumber, 'Edm.String') })
    });
  }
}
