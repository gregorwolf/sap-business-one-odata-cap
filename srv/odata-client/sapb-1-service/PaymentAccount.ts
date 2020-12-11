/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export class PaymentAccountField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PaymentAccount> {
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

  /**
   * Creates an instance of PaymentAccountField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, PaymentAccount);
  }
}

export namespace PaymentAccount {
  /**
   * Metadata information on all properties of the `PaymentAccount` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<PaymentAccount>[] = [{
    originalName: 'LineNum',
    name: 'lineNum',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'AccountCode',
    name: 'accountCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'SumPaid',
    name: 'sumPaid',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'SumPaidFC',
    name: 'sumPaidFc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Decription',
    name: 'decription',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'VatGroup',
    name: 'vatGroup',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'AccountName',
    name: 'accountName',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'GrossAmount',
    name: 'grossAmount',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'ProfitCenter',
    name: 'profitCenter',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ProjectCode',
    name: 'projectCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'VatAmount',
    name: 'vatAmount',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'ProfitCenter2',
    name: 'profitCenter2',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ProfitCenter3',
    name: 'profitCenter3',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ProfitCenter4',
    name: 'profitCenter4',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ProfitCenter5',
    name: 'profitCenter5',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'LocationCode',
    name: 'locationCode',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'EqualizationVatAmount',
    name: 'equalizationVatAmount',
    type: 'Edm.Double',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): PaymentAccount {
    return deserializeComplexTypeV4(json, PaymentAccount);
  }
}
