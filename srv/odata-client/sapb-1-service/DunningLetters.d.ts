import { DunningLettersRequestBuilder } from './DunningLettersRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "DunningLetters" of service "SAPB1".
 */
export declare class DunningLetters extends Entity implements DunningLettersType {
    /**
     * Technical entity name for DunningLetters.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for DunningLetters.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Fee Currency.
     * @nullable
     */
    feeCurrency?: string;
    /**
     * Row Number.
     * @nullable
     */
    rowNumber?: number;
    /**
     * Letter Format.
     * @nullable
     */
    letterFormat?: string;
    /**
     * Effectiveafter.
     * @nullable
     */
    effectiveafter?: string;
    /**
     * Minimum Balance Currency.
     * @nullable
     */
    minimumBalanceCurrency?: string;
    /**
     * Feeperletter.
     * @nullable
     */
    feeperletter?: number;
    /**
     * Minimum Balance.
     * @nullable
     */
    minimumBalance?: number;
    /**
     * One-to-many navigation property to the [[BusinessPartners]] entity.
     */
    businessPartners: BusinessPartners[];
    /**
     * Returns an entity builder to construct instances `DunningLetters`.
     * @returns A builder that constructs instances of entity type `DunningLetters`.
     */
    static builder(): EntityBuilderType<DunningLetters, DunningLettersTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `DunningLetters` entity type.
     * @returns A `DunningLetters` request builder.
     */
    static requestBuilder(): DunningLettersRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `DunningLetters`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `DunningLetters`.
     */
    static customField(fieldName: string): CustomField<DunningLetters>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
export interface DunningLettersType {
    feeCurrency?: string;
    rowNumber?: number;
    letterFormat?: string;
    effectiveafter?: string;
    minimumBalanceCurrency?: string;
    feeperletter?: number;
    minimumBalance?: number;
    businessPartners: BusinessPartnersType[];
}
export interface DunningLettersTypeForceMandatory {
    feeCurrency: string;
    rowNumber: number;
    letterFormat: string;
    effectiveafter: string;
    minimumBalanceCurrency: string;
    feeperletter: number;
    minimumBalance: number;
    businessPartners: BusinessPartnersType[];
}
export declare namespace DunningLetters {
    /**
     * Static representation of the [[feeCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FEE_CURRENCY: StringField<DunningLetters>;
    /**
     * Static representation of the [[rowNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ROW_NUMBER: NumberField<DunningLetters>;
    /**
     * Static representation of the [[letterFormat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LETTER_FORMAT: StringField<DunningLetters>;
    /**
     * Static representation of the [[effectiveafter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EFFECTIVEAFTER: StringField<DunningLetters>;
    /**
     * Static representation of the [[minimumBalanceCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MINIMUM_BALANCE_CURRENCY: StringField<DunningLetters>;
    /**
     * Static representation of the [[feeperletter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FEEPERLETTER: NumberField<DunningLetters>;
    /**
     * Static representation of the [[minimumBalance]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MINIMUM_BALANCE: NumberField<DunningLetters>;
    /**
     * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNERS: OneToManyLink<DunningLetters, BusinessPartners>;
    /**
     * All fields of the DunningLetters entity.
     */
    const _allFields: Array<StringField<DunningLetters> | NumberField<DunningLetters> | OneToManyLink<DunningLetters, BusinessPartners>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<DunningLetters>;
    /**
     * All key fields of the DunningLetters entity.
     */
    const _keyFields: Array<Field<DunningLetters>>;
    /**
     * Mapping of all key field names to the respective static field property DunningLetters.
     */
    const _keys: {
        [keys: string]: Field<DunningLetters>;
    };
}
//# sourceMappingURL=DunningLetters.d.ts.map