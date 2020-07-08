/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class OpenningBalanceAccountField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}

export namespace OpenningBalanceAccount {
  export function build(json: { [keys: string]: FieldType }): OpenningBalanceAccount {
    return createComplexType(json, {
      OpenBalanceAccount: (openBalanceAccount: string) => ({ openBalanceAccount: edmToTs(openBalanceAccount, 'Edm.String') }),
      Date: (date: Moment) => ({ date: edmToTs(date, 'Edm.DateTimeOffset') }),
      Ref1: (ref1: string) => ({ ref1: edmToTs(ref1, 'Edm.String') }),
      Ref2: (ref2: string) => ({ ref2: edmToTs(ref2, 'Edm.String') }),
      Details: (details: string) => ({ details: edmToTs(details, 'Edm.String') }),
      BPLID: (bplid: number) => ({ bplid: edmToTs(bplid, 'Edm.Int32') })
    });
  }
}
