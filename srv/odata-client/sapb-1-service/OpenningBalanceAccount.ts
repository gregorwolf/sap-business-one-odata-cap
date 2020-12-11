/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * OpenningBalanceAccount
 */
export interface OpenningBalanceAccount {
  /**
   * Open Balance Account.
   * @nullable
   */
  openBalanceAccount?: string;
  /**
   * Date.
   * @nullable
   */
  date?: Moment;
  /**
   * Ref 1.
   * @nullable
   */
  ref1?: string;
  /**
   * Ref 2.
   * @nullable
   */
  ref2?: string;
  /**
   * Details.
   * @nullable
   */
  details?: string;
  /**
   * Bplid.
   * @nullable
   */
  bplid?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[OpenningBalanceAccount.build]] instead.
 */
export function createOpenningBalanceAccount(json: any): OpenningBalanceAccount {
  return OpenningBalanceAccount.build(json);
}

/**
 * OpenningBalanceAccountField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class OpenningBalanceAccountField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, OpenningBalanceAccount> {
  /**
   * Representation of the [[OpenningBalanceAccount.openBalanceAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  openBalanceAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('OpenBalanceAccount', this, 'Edm.String');
  /**
   * Representation of the [[OpenningBalanceAccount.date]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  date: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('Date', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[OpenningBalanceAccount.ref1]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  ref1: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Ref1', this, 'Edm.String');
  /**
   * Representation of the [[OpenningBalanceAccount.ref2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  ref2: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Ref2', this, 'Edm.String');
  /**
   * Representation of the [[OpenningBalanceAccount.details]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  details: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Details', this, 'Edm.String');
  /**
   * Representation of the [[OpenningBalanceAccount.bplid]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bplid: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BPLID', this, 'Edm.Int32');

  /**
   * Creates an instance of OpenningBalanceAccountField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, OpenningBalanceAccount);
  }
}

export namespace OpenningBalanceAccount {
  /**
   * Metadata information on all properties of the `OpenningBalanceAccount` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<OpenningBalanceAccount>[] = [{
    originalName: 'OpenBalanceAccount',
    name: 'openBalanceAccount',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Date',
    name: 'date',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'Ref1',
    name: 'ref1',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Ref2',
    name: 'ref2',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Details',
    name: 'details',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BPLID',
    name: 'bplid',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): OpenningBalanceAccount {
    return deserializeComplexTypeV4(json, OpenningBalanceAccount);
  }
}
