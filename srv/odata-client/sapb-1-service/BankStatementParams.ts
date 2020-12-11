/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { BankStatementStatusEnum } from './BankStatementStatusEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * BankStatementParams
 */
export interface BankStatementParams {
  /**
   * Internal Number.
   * @nullable
   */
  internalNumber?: number;
  /**
   * Bank Account Key.
   * @nullable
   */
  bankAccountKey?: number;
  /**
   * Statement Number.
   * @nullable
   */
  statementNumber?: string;
  /**
   * Statement Date.
   * @nullable
   */
  statementDate?: Moment;
  /**
   * Status.
   * @nullable
   */
  status?: BankStatementStatusEnum;
  /**
   * Imported.
   * @nullable
   */
  imported?: BoYesNoEnum;
  /**
   * Starting Balance F.
   * @nullable
   */
  startingBalanceF?: number;
  /**
   * Ending Balance F.
   * @nullable
   */
  endingBalanceF?: number;
  /**
   * Currency.
   * @nullable
   */
  currency?: string;
  /**
   * Starting Balance L.
   * @nullable
   */
  startingBalanceL?: number;
  /**
   * Ending Balance L.
   * @nullable
   */
  endingBalanceL?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[BankStatementParams.build]] instead.
 */
export function createBankStatementParams(json: any): BankStatementParams {
  return BankStatementParams.build(json);
}

/**
 * BankStatementParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BankStatementParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BankStatementParams> {
  /**
   * Representation of the [[BankStatementParams.internalNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  internalNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('InternalNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[BankStatementParams.bankAccountKey]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bankAccountKey: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BankAccountKey', this, 'Edm.Int32');
  /**
   * Representation of the [[BankStatementParams.statementNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  statementNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('StatementNumber', this, 'Edm.String');
  /**
   * Representation of the [[BankStatementParams.statementDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  statementDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('StatementDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[BankStatementParams.status]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  status: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Status', this);
  /**
   * Representation of the [[BankStatementParams.imported]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  imported: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Imported', this);
  /**
   * Representation of the [[BankStatementParams.startingBalanceF]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  startingBalanceF: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('StartingBalanceF', this, 'Edm.Double');
  /**
   * Representation of the [[BankStatementParams.endingBalanceF]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  endingBalanceF: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('EndingBalanceF', this, 'Edm.Double');
  /**
   * Representation of the [[BankStatementParams.currency]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  currency: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Currency', this, 'Edm.String');
  /**
   * Representation of the [[BankStatementParams.startingBalanceL]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  startingBalanceL: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('StartingBalanceL', this, 'Edm.Double');
  /**
   * Representation of the [[BankStatementParams.endingBalanceL]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  endingBalanceL: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('EndingBalanceL', this, 'Edm.Double');

  /**
   * Creates an instance of BankStatementParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, BankStatementParams);
  }
}

export namespace BankStatementParams {
  /**
   * Metadata information on all properties of the `BankStatementParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BankStatementParams>[] = [{
    originalName: 'InternalNumber',
    name: 'internalNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'BankAccountKey',
    name: 'bankAccountKey',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'StatementNumber',
    name: 'statementNumber',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'StatementDate',
    name: 'statementDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'Status',
    name: 'status',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'Imported',
    name: 'imported',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'StartingBalanceF',
    name: 'startingBalanceF',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'EndingBalanceF',
    name: 'endingBalanceF',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Currency',
    name: 'currency',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'StartingBalanceL',
    name: 'startingBalanceL',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'EndingBalanceL',
    name: 'endingBalanceL',
    type: 'Edm.Double',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): BankStatementParams {
    return deserializeComplexTypeV4(json, BankStatementParams);
  }
}
