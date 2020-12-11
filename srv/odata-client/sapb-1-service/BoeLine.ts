/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { BoBoeStatus } from './BoBoeStatus';
import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * BoeLine
 */
export interface BoeLine {
  /**
   * Boe Key.
   * @nullable
   */
  boeKey?: number;
  /**
   * Boe Number.
   * @nullable
   */
  boeNumber?: number;
  /**
   * Due Date.
   * @nullable
   */
  dueDate?: Moment;
  /**
   * Bank.
   * @nullable
   */
  bank?: string;
  /**
   * Branch.
   * @nullable
   */
  branch?: string;
  /**
   * Account Number.
   * @nullable
   */
  accountNumber?: string;
  /**
   * Amount.
   * @nullable
   */
  amount?: number;
  /**
   * Boe Status.
   * @nullable
   */
  boeStatus?: BoBoeStatus;
  /**
   * Transferred.
   * @nullable
   */
  transferred?: BoYesNoEnum;
}

/**
 * @deprecated Since v1.6.0. Use [[BoeLine.build]] instead.
 */
export function createBoeLine(json: any): BoeLine {
  return BoeLine.build(json);
}

/**
 * BoeLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BoeLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BoeLine> {
  /**
   * Representation of the [[BoeLine.boeKey]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  boeKey: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BOEKey', this, 'Edm.Int32');
  /**
   * Representation of the [[BoeLine.boeNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  boeNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BOENumber', this, 'Edm.Int32');
  /**
   * Representation of the [[BoeLine.dueDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dueDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('DueDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[BoeLine.bank]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bank: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Bank', this, 'Edm.String');
  /**
   * Representation of the [[BoeLine.branch]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  branch: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Branch', this, 'Edm.String');
  /**
   * Representation of the [[BoeLine.accountNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accountNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AccountNumber', this, 'Edm.String');
  /**
   * Representation of the [[BoeLine.amount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  amount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Amount', this, 'Edm.Double');
  /**
   * Representation of the [[BoeLine.boeStatus]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  boeStatus: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('BOEStatus', this);
  /**
   * Representation of the [[BoeLine.transferred]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  transferred: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Transferred', this);

  /**
   * Creates an instance of BoeLineField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, BoeLine);
  }
}

export namespace BoeLine {
  /**
   * Metadata information on all properties of the `BoeLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BoeLine>[] = [{
    originalName: 'BOEKey',
    name: 'boeKey',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'BOENumber',
    name: 'boeNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'DueDate',
    name: 'dueDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'Bank',
    name: 'bank',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Branch',
    name: 'branch',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'AccountNumber',
    name: 'accountNumber',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Amount',
    name: 'amount',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'BOEStatus',
    name: 'boeStatus',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'Transferred',
    name: 'transferred',
    type: 'Edm.Enum',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): BoeLine {
    return deserializeComplexTypeV4(json, BoeLine);
  }
}
