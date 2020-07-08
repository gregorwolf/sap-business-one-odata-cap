/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MaterialRevaluationRequestBuilder } from './MaterialRevaluationRequestBuilder';
import { Moment } from 'moment';
import { MaterialRevaluationLine, MaterialRevaluationLineField } from './MaterialRevaluationLine';
import { AllFields, CollectionField, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, OneToOneLink, StringField, Time, TimeField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "MaterialRevaluation" of service "SAPB1".
 */
export class MaterialRevaluation extends Entity implements MaterialRevaluationType {
  /**
   * Technical entity name for MaterialRevaluation.
   */
  static _entityName = 'MaterialRevaluation';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for MaterialRevaluation.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Doc Num.
   * @nullable
   */
  docNum?: number;
  /**
   * Doc Date.
   * @nullable
   */
  docDate?: Moment;
  /**
   * Reference 1.
   * @nullable
   */
  reference1?: string;
  /**
   * Reference 2.
   * @nullable
   */
  reference2?: string;
  /**
   * Comments.
   * @nullable
   */
  comments?: string;
  /**
   * Journal Memo.
   * @nullable
   */
  journalMemo?: string;
  /**
   * Doc Time.
   * @nullable
   */
  docTime?: Time;
  /**
   * Series.
   * @nullable
   */
  series?: number;
  /**
   * Tax Date.
   * @nullable
   */
  taxDate?: Moment;
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: number;
  /**
   * Creation Date.
   * @nullable
   */
  creationDate?: Moment;
  /**
   * Update Date.
   * @nullable
   */
  updateDate?: Moment;
  /**
   * Trans Num.
   * @nullable
   */
  transNum?: number;
  /**
   * Reval Type.
   * @nullable
   */
  revalType?: string;
  /**
   * Revaluation Income Account.
   * @nullable
   */
  revaluationIncomeAccount?: string;
  /**
   * Revaluation Expense Account.
   * @nullable
   */
  revaluationExpenseAccount?: string;
  /**
   * Data Source.
   * @nullable
   */
  dataSource?: string;
  /**
   * User Signature.
   * @nullable
   */
  userSignature?: number;
  /**
   * Card Code.
   * @nullable
   */
  cardCode?: string;
  /**
   * Card Name.
   * @nullable
   */
  cardName?: string;
  /**
   * Material Revaluation Lines.
   * @nullable
   */
  materialRevaluationLines?: MaterialRevaluationLine[];
  /**
   * One-to-one navigation property to the [[JournalEntries]] entity.
   */
  journalEntry!: JournalEntries;
  /**
   * One-to-one navigation property to the [[Users]] entity.
   */
  user!: Users;
  /**
   * One-to-one navigation property to the [[BusinessPartners]] entity.
   */
  businessPartner!: BusinessPartners;

  /**
   * Returns an entity builder to construct instances `MaterialRevaluation`.
   * @returns A builder that constructs instances of entity type `MaterialRevaluation`.
   */
  static builder(): EntityBuilderType<MaterialRevaluation, MaterialRevaluationTypeForceMandatory> {
    return Entity.entityBuilder(MaterialRevaluation);
  }

  /**
   * Returns a request builder to construct requests for operations on the `MaterialRevaluation` entity type.
   * @returns A `MaterialRevaluation` request builder.
   */
  static requestBuilder(): MaterialRevaluationRequestBuilder {
    return new MaterialRevaluationRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `MaterialRevaluation`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `MaterialRevaluation`.
   */
  static customField(fieldName: string): CustomField<MaterialRevaluation> {
    return Entity.customFieldSelector(fieldName, MaterialRevaluation);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { JournalEntries, JournalEntriesType } from './JournalEntries';
import { Users, UsersType } from './Users';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';

export interface MaterialRevaluationType {
  docNum?: number;
  docDate?: Moment;
  reference1?: string;
  reference2?: string;
  comments?: string;
  journalMemo?: string;
  docTime?: Time;
  series?: number;
  taxDate?: Moment;
  docEntry?: number;
  creationDate?: Moment;
  updateDate?: Moment;
  transNum?: number;
  revalType?: string;
  revaluationIncomeAccount?: string;
  revaluationExpenseAccount?: string;
  dataSource?: string;
  userSignature?: number;
  cardCode?: string;
  cardName?: string;
  materialRevaluationLines?: MaterialRevaluationLine[];
  journalEntry: JournalEntriesType;
  user: UsersType;
  businessPartner: BusinessPartnersType;
}

export interface MaterialRevaluationTypeForceMandatory {
  docNum: number;
  docDate: Moment;
  reference1: string;
  reference2: string;
  comments: string;
  journalMemo: string;
  docTime: Time;
  series: number;
  taxDate: Moment;
  docEntry: number;
  creationDate: Moment;
  updateDate: Moment;
  transNum: number;
  revalType: string;
  revaluationIncomeAccount: string;
  revaluationExpenseAccount: string;
  dataSource: string;
  userSignature: number;
  cardCode: string;
  cardName: string;
  materialRevaluationLines: MaterialRevaluationLine[];
  journalEntry: JournalEntriesType;
  user: UsersType;
  businessPartner: BusinessPartnersType;
}

export namespace MaterialRevaluation {
  /**
   * Static representation of the [[docNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_NUM: NumberField<MaterialRevaluation> = new NumberField('DocNum', MaterialRevaluation, 'Edm.Int32');
  /**
   * Static representation of the [[docDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_DATE: DateField<MaterialRevaluation> = new DateField('DocDate', MaterialRevaluation, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[reference1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REFERENCE_1: StringField<MaterialRevaluation> = new StringField('Reference1', MaterialRevaluation, 'Edm.String');
  /**
   * Static representation of the [[reference2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REFERENCE_2: StringField<MaterialRevaluation> = new StringField('Reference2', MaterialRevaluation, 'Edm.String');
  /**
   * Static representation of the [[comments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMENTS: StringField<MaterialRevaluation> = new StringField('Comments', MaterialRevaluation, 'Edm.String');
  /**
   * Static representation of the [[journalMemo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOURNAL_MEMO: StringField<MaterialRevaluation> = new StringField('JournalMemo', MaterialRevaluation, 'Edm.String');
  /**
   * Static representation of the [[docTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_TIME: TimeField<MaterialRevaluation> = new TimeField('DocTime', MaterialRevaluation, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[series]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERIES: NumberField<MaterialRevaluation> = new NumberField('Series', MaterialRevaluation, 'Edm.Int32');
  /**
   * Static representation of the [[taxDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_DATE: DateField<MaterialRevaluation> = new DateField('TaxDate', MaterialRevaluation, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_ENTRY: NumberField<MaterialRevaluation> = new NumberField('DocEntry', MaterialRevaluation, 'Edm.Int32');
  /**
   * Static representation of the [[creationDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATION_DATE: DateField<MaterialRevaluation> = new DateField('CreationDate', MaterialRevaluation, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[updateDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UPDATE_DATE: DateField<MaterialRevaluation> = new DateField('UpdateDate', MaterialRevaluation, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[transNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANS_NUM: NumberField<MaterialRevaluation> = new NumberField('TransNum', MaterialRevaluation, 'Edm.Int32');
  /**
   * Static representation of the [[revalType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REVAL_TYPE: StringField<MaterialRevaluation> = new StringField('RevalType', MaterialRevaluation, 'Edm.String');
  /**
   * Static representation of the [[revaluationIncomeAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REVALUATION_INCOME_ACCOUNT: StringField<MaterialRevaluation> = new StringField('RevaluationIncomeAccount', MaterialRevaluation, 'Edm.String');
  /**
   * Static representation of the [[revaluationExpenseAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REVALUATION_EXPENSE_ACCOUNT: StringField<MaterialRevaluation> = new StringField('RevaluationExpenseAccount', MaterialRevaluation, 'Edm.String');
  /**
   * Static representation of the [[dataSource]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DATA_SOURCE: StringField<MaterialRevaluation> = new StringField('DataSource', MaterialRevaluation, 'Edm.String');
  /**
   * Static representation of the [[userSignature]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_SIGNATURE: NumberField<MaterialRevaluation> = new NumberField('UserSignature', MaterialRevaluation, 'Edm.Int32');
  /**
   * Static representation of the [[cardCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CARD_CODE: StringField<MaterialRevaluation> = new StringField('CardCode', MaterialRevaluation, 'Edm.String');
  /**
   * Static representation of the [[cardName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CARD_NAME: StringField<MaterialRevaluation> = new StringField('CardName', MaterialRevaluation, 'Edm.String');
  /**
   * Static representation of the [[materialRevaluationLines]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MATERIAL_REVALUATION_LINES: CollectionField<MaterialRevaluation> = new CollectionField('MaterialRevaluationLines', MaterialRevaluation, new MaterialRevaluationLineField('', MaterialRevaluation));
  /**
   * Static representation of the one-to-one navigation property [[journalEntry]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOURNAL_ENTRY: OneToOneLink<MaterialRevaluation, JournalEntries> = new OneToOneLink('JournalEntry', MaterialRevaluation, JournalEntries);
  /**
   * Static representation of the one-to-one navigation property [[user]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER: OneToOneLink<MaterialRevaluation, Users> = new OneToOneLink('User', MaterialRevaluation, Users);
  /**
   * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER: OneToOneLink<MaterialRevaluation, BusinessPartners> = new OneToOneLink('BusinessPartner', MaterialRevaluation, BusinessPartners);
  /**
   * All fields of the MaterialRevaluation entity.
   */
  export const _allFields: Array<NumberField<MaterialRevaluation> | DateField<MaterialRevaluation> | StringField<MaterialRevaluation> | TimeField<MaterialRevaluation> | CollectionField<MaterialRevaluation> | OneToOneLink<MaterialRevaluation, JournalEntries> | OneToOneLink<MaterialRevaluation, Users> | OneToOneLink<MaterialRevaluation, BusinessPartners>> = [
    MaterialRevaluation.DOC_NUM,
    MaterialRevaluation.DOC_DATE,
    MaterialRevaluation.REFERENCE_1,
    MaterialRevaluation.REFERENCE_2,
    MaterialRevaluation.COMMENTS,
    MaterialRevaluation.JOURNAL_MEMO,
    MaterialRevaluation.DOC_TIME,
    MaterialRevaluation.SERIES,
    MaterialRevaluation.TAX_DATE,
    MaterialRevaluation.DOC_ENTRY,
    MaterialRevaluation.CREATION_DATE,
    MaterialRevaluation.UPDATE_DATE,
    MaterialRevaluation.TRANS_NUM,
    MaterialRevaluation.REVAL_TYPE,
    MaterialRevaluation.REVALUATION_INCOME_ACCOUNT,
    MaterialRevaluation.REVALUATION_EXPENSE_ACCOUNT,
    MaterialRevaluation.DATA_SOURCE,
    MaterialRevaluation.USER_SIGNATURE,
    MaterialRevaluation.CARD_CODE,
    MaterialRevaluation.CARD_NAME,
    MaterialRevaluation.MATERIAL_REVALUATION_LINES,
    MaterialRevaluation.JOURNAL_ENTRY,
    MaterialRevaluation.USER,
    MaterialRevaluation.BUSINESS_PARTNER
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<MaterialRevaluation> = new AllFields('*', MaterialRevaluation);
  /**
   * All key fields of the MaterialRevaluation entity.
   */
  export const _keyFields: Array<Field<MaterialRevaluation>> = [MaterialRevaluation.DOC_ENTRY];
  /**
   * Mapping of all key field names to the respective static field property MaterialRevaluation.
   */
  export const _keys: { [keys: string]: Field<MaterialRevaluation> } = MaterialRevaluation._keyFields.reduce((acc: { [keys: string]: Field<MaterialRevaluation> }, field: Field<MaterialRevaluation>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
