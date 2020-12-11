import { MaterialRevaluationRequestBuilder } from './MaterialRevaluationRequestBuilder';
import { Moment } from 'moment';
import { MaterialRevaluationLine } from './MaterialRevaluationLine';
import { BoYesNoEnum } from './BoYesNoEnum';
import { AllFields, CollectionField, CustomFieldV4, DateField, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToOneLink, StringField, Time, TimeField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "MaterialRevaluation" of service "SAPB1".
 */
export declare class MaterialRevaluation extends EntityV4 implements MaterialRevaluationType {
    /**
     * Technical entity name for MaterialRevaluation.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
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
     * Inflation Revaluation.
     * @nullable
     */
    inflationRevaluation?: BoYesNoEnum;
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
    journalEntry: JournalEntries;
    /**
     * One-to-one navigation property to the [[Users]] entity.
     */
    user: Users;
    /**
     * One-to-one navigation property to the [[BusinessPartners]] entity.
     */
    businessPartner: BusinessPartners;
    /**
     * Returns an entity builder to construct instances of `MaterialRevaluation`.
     * @returns A builder that constructs instances of entity type `MaterialRevaluation`.
     */
    static builder(): EntityBuilderType<MaterialRevaluation, MaterialRevaluationType>;
    /**
     * Returns a request builder to construct requests for operations on the `MaterialRevaluation` entity type.
     * @returns A `MaterialRevaluation` request builder.
     */
    static requestBuilder(): MaterialRevaluationRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `MaterialRevaluation`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `MaterialRevaluation`.
     */
    static customField(fieldName: string): CustomFieldV4<MaterialRevaluation>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { JournalEntries, JournalEntriesType } from './JournalEntries';
import { Users, UsersType } from './Users';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
export interface MaterialRevaluationType {
    docNum?: number | null;
    docDate?: Moment | null;
    reference1?: string | null;
    reference2?: string | null;
    comments?: string | null;
    journalMemo?: string | null;
    docTime?: Time | null;
    series?: number | null;
    taxDate?: Moment | null;
    docEntry?: number | null;
    creationDate?: Moment | null;
    updateDate?: Moment | null;
    transNum?: number | null;
    revalType?: string | null;
    revaluationIncomeAccount?: string | null;
    revaluationExpenseAccount?: string | null;
    dataSource?: string | null;
    userSignature?: number | null;
    inflationRevaluation?: BoYesNoEnum | null;
    cardCode?: string | null;
    cardName?: string | null;
    materialRevaluationLines?: MaterialRevaluationLine[] | null;
    journalEntry: JournalEntriesType;
    user: UsersType;
    businessPartner: BusinessPartnersType;
}
export declare namespace MaterialRevaluation {
    /**
     * Static representation of the [[docNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_NUM: NumberField<MaterialRevaluation>;
    /**
     * Static representation of the [[docDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_DATE: DateField<MaterialRevaluation>;
    /**
     * Static representation of the [[reference1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REFERENCE_1: StringField<MaterialRevaluation>;
    /**
     * Static representation of the [[reference2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REFERENCE_2: StringField<MaterialRevaluation>;
    /**
     * Static representation of the [[comments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMMENTS: StringField<MaterialRevaluation>;
    /**
     * Static representation of the [[journalMemo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOURNAL_MEMO: StringField<MaterialRevaluation>;
    /**
     * Static representation of the [[docTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_TIME: TimeField<MaterialRevaluation>;
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERIES: NumberField<MaterialRevaluation>;
    /**
     * Static representation of the [[taxDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_DATE: DateField<MaterialRevaluation>;
    /**
     * Static representation of the [[docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_ENTRY: NumberField<MaterialRevaluation>;
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATION_DATE: DateField<MaterialRevaluation>;
    /**
     * Static representation of the [[updateDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UPDATE_DATE: DateField<MaterialRevaluation>;
    /**
     * Static representation of the [[transNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TRANS_NUM: NumberField<MaterialRevaluation>;
    /**
     * Static representation of the [[revalType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REVAL_TYPE: StringField<MaterialRevaluation>;
    /**
     * Static representation of the [[revaluationIncomeAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REVALUATION_INCOME_ACCOUNT: StringField<MaterialRevaluation>;
    /**
     * Static representation of the [[revaluationExpenseAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REVALUATION_EXPENSE_ACCOUNT: StringField<MaterialRevaluation>;
    /**
     * Static representation of the [[dataSource]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DATA_SOURCE: StringField<MaterialRevaluation>;
    /**
     * Static representation of the [[userSignature]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_SIGNATURE: NumberField<MaterialRevaluation>;
    /**
     * Static representation of the [[inflationRevaluation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INFLATION_REVALUATION: EnumField<MaterialRevaluation>;
    /**
     * Static representation of the [[cardCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CARD_CODE: StringField<MaterialRevaluation>;
    /**
     * Static representation of the [[cardName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CARD_NAME: StringField<MaterialRevaluation>;
    /**
     * Static representation of the [[materialRevaluationLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MATERIAL_REVALUATION_LINES: CollectionField<MaterialRevaluation, MaterialRevaluationLine>;
    /**
     * Static representation of the one-to-one navigation property [[journalEntry]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOURNAL_ENTRY: OneToOneLink<MaterialRevaluation, JournalEntries>;
    /**
     * Static representation of the one-to-one navigation property [[user]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER: OneToOneLink<MaterialRevaluation, Users>;
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER: OneToOneLink<MaterialRevaluation, BusinessPartners>;
    /**
     * All fields of the MaterialRevaluation entity.
     */
    const _allFields: Array<NumberField<MaterialRevaluation> | DateField<MaterialRevaluation> | StringField<MaterialRevaluation> | TimeField<MaterialRevaluation> | EnumField<MaterialRevaluation> | CollectionField<MaterialRevaluation, MaterialRevaluationLine> | OneToOneLink<MaterialRevaluation, JournalEntries> | OneToOneLink<MaterialRevaluation, Users> | OneToOneLink<MaterialRevaluation, BusinessPartners>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<MaterialRevaluation>;
    /**
     * All key fields of the MaterialRevaluation entity.
     */
    const _keyFields: Array<Field<MaterialRevaluation>>;
    /**
     * Mapping of all key field names to the respective static field property MaterialRevaluation.
     */
    const _keys: {
        [keys: string]: Field<MaterialRevaluation>;
    };
}
//# sourceMappingURL=MaterialRevaluation.d.ts.map