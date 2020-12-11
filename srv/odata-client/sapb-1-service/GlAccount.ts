/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * GlAccount
 */
export interface GlAccount {
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
}

/**
 * @deprecated Since v1.6.0. Use [[GlAccount.build]] instead.
 */
export function createGlAccount(json: any): GlAccount {
  return GlAccount.build(json);
}

/**
 * GlAccountField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class GlAccountField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, GlAccount> {
  /**
   * Representation of the [[GlAccount.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Code', this, 'Edm.String');
  /**
   * Representation of the [[GlAccount.dueDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dueDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('DueDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[GlAccount.debit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  debit: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Debit', this, 'Edm.Double');
  /**
   * Representation of the [[GlAccount.credit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  credit: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Credit', this, 'Edm.Double');
  /**
   * Representation of the [[GlAccount.systemDebit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  systemDebit: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SystemDebit', this, 'Edm.Double');
  /**
   * Representation of the [[GlAccount.systemCredit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  systemCredit: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SystemCredit', this, 'Edm.Double');
  /**
   * Representation of the [[GlAccount.foreignDebit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  foreignDebit: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ForeignDebit', this, 'Edm.Double');
  /**
   * Representation of the [[GlAccount.foreignCredit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  foreignCredit: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ForeignCredit', this, 'Edm.Double');
  /**
   * Representation of the [[GlAccount.foreignCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  foreignCurrency: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ForeignCurrency', this, 'Edm.String');

  /**
   * Creates an instance of GlAccountField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, GlAccount);
  }
}

export namespace GlAccount {
  /**
   * Metadata information on all properties of the `GlAccount` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<GlAccount>[] = [{
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
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): GlAccount {
    return deserializeComplexTypeV4(json, GlAccount);
  }
}
