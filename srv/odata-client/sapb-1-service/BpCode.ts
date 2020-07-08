/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class BpCodeField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}

export namespace BpCode {
  export function build(json: { [keys: string]: FieldType }): BpCode {
    return createComplexType(json, {
      Code: (code: string) => ({ code: edmToTs(code, 'Edm.String') }),
      DueDate: (dueDate: Moment) => ({ dueDate: edmToTs(dueDate, 'Edm.DateTimeOffset') }),
      Debit: (debit: number) => ({ debit: edmToTs(debit, 'Edm.Double') }),
      Credit: (credit: number) => ({ credit: edmToTs(credit, 'Edm.Double') }),
      SystemDebit: (systemDebit: number) => ({ systemDebit: edmToTs(systemDebit, 'Edm.Double') }),
      SystemCredit: (systemCredit: number) => ({ systemCredit: edmToTs(systemCredit, 'Edm.Double') }),
      ForeignDebit: (foreignDebit: number) => ({ foreignDebit: edmToTs(foreignDebit, 'Edm.Double') }),
      ForeignCredit: (foreignCredit: number) => ({ foreignCredit: edmToTs(foreignCredit, 'Edm.Double') }),
      ForeignCurrency: (foreignCurrency: string) => ({ foreignCurrency: edmToTs(foreignCurrency, 'Edm.String') }),
      BpCtrlAcct: (bpCtrlAcct: string) => ({ bpCtrlAcct: edmToTs(bpCtrlAcct, 'Edm.String') })
    });
  }
}
