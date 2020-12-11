/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * BpCode
 */
export interface BpCode {
  /**
   * Code.
   * @nullable
   */
  code?: string;
  /**
   * Due Date.
   * @nullable
   */
  dueDate?: Moment;
  /**
   * Debit.
   * @nullable
   */
  debit?: number;
  /**
   * Credit.
   * @nullable
   */
  credit?: number;
  /**
   * System Debit.
   * @nullable
   */
  systemDebit?: number;
  /**
   * System Credit.
   * @nullable
   */
  systemCredit?: number;
  /**
   * Foreign Debit.
   * @nullable
   */
  foreignDebit?: number;
  /**
   * Foreign Credit.
   * @nullable
   */
  foreignCredit?: number;
  /**
   * Foreign Currency.
   * @nullable
   */
  foreignCurrency?: string;
  /**
   * Bp Ctrl Acct.
   * @nullable
   */
  bpCtrlAcct?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[BpCode.build]] instead.
 */
export function createBpCode(json: any): BpCode {
  return BpCode.build(json);
}

/**
 * BpCodeField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BpCodeField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BpCode> {
  /**
   * Representation of the [[BpCode.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Code', this, 'Edm.String');
  /**
   * Representation of the [[BpCode.dueDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dueDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('DueDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[BpCode.debit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  debit: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Debit', this, 'Edm.Double');
  /**
   * Representation of the [[BpCode.credit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  credit: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Credit', this, 'Edm.Double');
  /**
   * Representation of the [[BpCode.systemDebit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  systemDebit: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SystemDebit', this, 'Edm.Double');
  /**
   * Representation of the [[BpCode.systemCredit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  systemCredit: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SystemCredit', this, 'Edm.Double');
  /**
   * Representation of the [[BpCode.foreignDebit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  foreignDebit: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ForeignDebit', this, 'Edm.Double');
  /**
   * Representation of the [[BpCode.foreignCredit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  foreignCredit: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ForeignCredit', this, 'Edm.Double');
  /**
   * Representation of the [[BpCode.foreignCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  foreignCurrency: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ForeignCurrency', this, 'Edm.String');
  /**
   * Representation of the [[BpCode.bpCtrlAcct]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpCtrlAcct: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BpCtrlAcct', this, 'Edm.String');

  /**
   * Creates an instance of BpCodeField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, BpCode);
  }
}

export namespace BpCode {
  /**
   * Metadata information on all properties of the `BpCode` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BpCode>[] = [{
    originalName: 'Code',
    name: 'code',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'DueDate',
    name: 'dueDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'Debit',
    name: 'debit',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Credit',
    name: 'credit',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'SystemDebit',
    name: 'systemDebit',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'SystemCredit',
    name: 'systemCredit',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'ForeignDebit',
    name: 'foreignDebit',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'ForeignCredit',
    name: 'foreignCredit',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'ForeignCurrency',
    name: 'foreignCurrency',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BpCtrlAcct',
    name: 'bpCtrlAcct',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): BpCode {
    return deserializeComplexTypeV4(json, BpCode);
  }
}
