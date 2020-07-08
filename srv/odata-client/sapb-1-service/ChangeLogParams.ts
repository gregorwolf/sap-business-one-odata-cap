/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * ChangeLogParams
 */
export interface ChangeLogParams {
  /**
   * Log Instance.
   * @nullable
   */
  logInstance?: number;
  /**
   * Updated Date.
   * @nullable
   */
  updatedDate?: Moment;
  /**
   * User Name.
   * @nullable
   */
  userName?: string;
  /**
   * Object Code.
   * @nullable
   */
  objectCode?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[ChangeLogParams.build]] instead.
 */
export function createChangeLogParams(json: any): ChangeLogParams {
  return ChangeLogParams.build(json);
}

/**
 * ChangeLogParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ChangeLogParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ChangeLogParams.logInstance]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  logInstance: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LogInstance', this, 'Edm.Int32');
  /**
   * Representation of the [[ChangeLogParams.updatedDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  updatedDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('UpdatedDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[ChangeLogParams.userName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  userName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('UserName', this, 'Edm.String');
  /**
   * Representation of the [[ChangeLogParams.objectCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  objectCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ObjectCode', this, 'Edm.String');
}

export namespace ChangeLogParams {
  export function build(json: { [keys: string]: FieldType }): ChangeLogParams {
    return createComplexType(json, {
      LogInstance: (logInstance: number) => ({ logInstance: edmToTs(logInstance, 'Edm.Int32') }),
      UpdatedDate: (updatedDate: Moment) => ({ updatedDate: edmToTs(updatedDate, 'Edm.DateTimeOffset') }),
      UserName: (userName: string) => ({ userName: edmToTs(userName, 'Edm.String') }),
      ObjectCode: (objectCode: string) => ({ objectCode: edmToTs(objectCode, 'Edm.String') })
    });
  }
}
