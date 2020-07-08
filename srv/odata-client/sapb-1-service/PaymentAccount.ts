/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * PaymentAccount
 */
export interface PaymentAccount {
  /**
   * Line Num.
   * @nullable
   */
  lineNum?: number;
  /**
   * Account Code.
   * @nullable
   */
  accountCode?: string;
  /**
   * Sum Paid.
   * @nullable
   */
  sumPaid?: number;
  /**
   * Sum Paid Fc.
   * @nullable
   */
  sumPaidFc?: number;
  /**
   * Decription.
   * @nullable
   */
  decription?: string;
  /**
   * Vat Group.
   * @nullable
   */
  vatGroup?: string;
  /**
   * Account Name.
   * @nullable
   */
  accountName?: string;
  /**
   * Gross Amount.
   * @nullable
   */
  grossAmount?: number;
  /**
   * Profit Center.
   * @nullable
   */
  profitCenter?: string;
  /**
   * Project Code.
   * @nullable
   */
  projectCode?: string;
  /**
   * Vat Amount.
   * @nullable
   */
  vatAmount?: number;
  /**
   * Profit Center 2.
   * @nullable
   */
  profitCenter2?: string;
  /**
   * Profit Center 3.
   * @nullable
   */
  profitCenter3?: string;
  /**
   * Profit Center 4.
   * @nullable
   */
  profitCenter4?: string;
  /**
   * Profit Center 5.
   * @nullable
   */
  profitCenter5?: string;
  /**
   * Location Code.
   * @nullable
   */
  locationCode?: number;
  /**
   * Equalization Vat Amount.
   * @nullable
   */
  equalizationVatAmount?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[PaymentAccount.build]] instead.
 */
export function createPaymentAccount(json: any): PaymentAccount {
  return PaymentAccount.build(json);
}

/**
 * PaymentAccountField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class PaymentAccountField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[PaymentAccount.lineNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineNum', this, 'Edm.Int32');
  /**
   * Representation of the [[PaymentAccount.accountCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accountCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AccountCode', this, 'Edm.String');
  /**
   * Representation of the [[PaymentAccount.sumPaid]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sumPaid: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SumPaid', this, 'Edm.Double');
  /**
   * Representation of the [[PaymentAccount.sumPaidFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sumPaidFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SumPaidFC', this, 'Edm.Double');
  /**
   * Representation of the [[PaymentAccount.decription]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  decription: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Decription', this, 'Edm.String');
  /**
   * Representation of the [[PaymentAccount.vatGroup]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  vatGroup: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('VatGroup', this, 'Edm.String');
  /**
   * Representation of the [[PaymentAccount.accountName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accountName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AccountName', this, 'Edm.String');
  /**
   * Representation of the [[PaymentAccount.grossAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  grossAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('GrossAmount', this, 'Edm.Double');
  /**
   * Representation of the [[PaymentAccount.profitCenter]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  profitCenter: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ProfitCenter', this, 'Edm.String');
  /**
   * Representation of the [[PaymentAccount.projectCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  projectCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ProjectCode', this, 'Edm.String');
  /**
   * Representation of the [[PaymentAccount.vatAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  vatAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('VatAmount', this, 'Edm.Double');
  /**
   * Representation of the [[PaymentAccount.profitCenter2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  profitCenter2: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ProfitCenter2', this, 'Edm.String');
  /**
   * Representation of the [[PaymentAccount.profitCenter3]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  profitCenter3: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ProfitCenter3', this, 'Edm.String');
  /**
   * Representation of the [[PaymentAccount.profitCenter4]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  profitCenter4: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ProfitCenter4', this, 'Edm.String');
  /**
   * Representation of the [[PaymentAccount.profitCenter5]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  profitCenter5: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ProfitCenter5', this, 'Edm.String');
  /**
   * Representation of the [[PaymentAccount.locationCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  locationCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LocationCode', this, 'Edm.Int32');
  /**
   * Representation of the [[PaymentAccount.equalizationVatAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  equalizationVatAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('EqualizationVatAmount', this, 'Edm.Double');
}

export namespace PaymentAccount {
  export function build(json: { [keys: string]: FieldType }): PaymentAccount {
    return createComplexType(json, {
      LineNum: (lineNum: number) => ({ lineNum: edmToTs(lineNum, 'Edm.Int32') }),
      AccountCode: (accountCode: string) => ({ accountCode: edmToTs(accountCode, 'Edm.String') }),
      SumPaid: (sumPaid: number) => ({ sumPaid: edmToTs(sumPaid, 'Edm.Double') }),
      SumPaidFC: (sumPaidFc: number) => ({ sumPaidFc: edmToTs(sumPaidFc, 'Edm.Double') }),
      Decription: (decription: string) => ({ decription: edmToTs(decription, 'Edm.String') }),
      VatGroup: (vatGroup: string) => ({ vatGroup: edmToTs(vatGroup, 'Edm.String') }),
      AccountName: (accountName: string) => ({ accountName: edmToTs(accountName, 'Edm.String') }),
      GrossAmount: (grossAmount: number) => ({ grossAmount: edmToTs(grossAmount, 'Edm.Double') }),
      ProfitCenter: (profitCenter: string) => ({ profitCenter: edmToTs(profitCenter, 'Edm.String') }),
      ProjectCode: (projectCode: string) => ({ projectCode: edmToTs(projectCode, 'Edm.String') }),
      VatAmount: (vatAmount: number) => ({ vatAmount: edmToTs(vatAmount, 'Edm.Double') }),
      ProfitCenter2: (profitCenter2: string) => ({ profitCenter2: edmToTs(profitCenter2, 'Edm.String') }),
      ProfitCenter3: (profitCenter3: string) => ({ profitCenter3: edmToTs(profitCenter3, 'Edm.String') }),
      ProfitCenter4: (profitCenter4: string) => ({ profitCenter4: edmToTs(profitCenter4, 'Edm.String') }),
      ProfitCenter5: (profitCenter5: string) => ({ profitCenter5: edmToTs(profitCenter5, 'Edm.String') }),
      LocationCode: (locationCode: number) => ({ locationCode: edmToTs(locationCode, 'Edm.Int32') }),
      EqualizationVatAmount: (equalizationVatAmount: number) => ({ equalizationVatAmount: edmToTs(equalizationVatAmount, 'Edm.Double') })
    });
  }
}
