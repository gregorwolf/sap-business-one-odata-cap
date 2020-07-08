import { BoePortfoliosRequestBuilder } from './BoePortfoliosRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "BOEPortfolios" of service "SAPB1".
 */
export declare class BoePortfolios extends Entity implements BoePortfoliosType {
    /**
     * Technical entity name for BoePortfolios.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for BoePortfolios.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Portfolio Entry.
     * @nullable
     */
    portfolioEntry?: number;
    /**
     * Portfolio Id.
     * @nullable
     */
    portfolioId?: string;
    /**
     * Portfolio Code.
     * @nullable
     */
    portfolioCode?: string;
    /**
     * Portfolio Num.
     * @nullable
     */
    portfolioNum?: string;
    /**
     * Portfolio Description.
     * @nullable
     */
    portfolioDescription?: string;
    /**
     * Returns an entity builder to construct instances `BoePortfolios`.
     * @returns A builder that constructs instances of entity type `BoePortfolios`.
     */
    static builder(): EntityBuilderType<BoePortfolios, BoePortfoliosTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `BoePortfolios` entity type.
     * @returns A `BoePortfolios` request builder.
     */
    static requestBuilder(): BoePortfoliosRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BoePortfolios`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BoePortfolios`.
     */
    static customField(fieldName: string): CustomField<BoePortfolios>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface BoePortfoliosType {
    portfolioEntry?: number;
    portfolioId?: string;
    portfolioCode?: string;
    portfolioNum?: string;
    portfolioDescription?: string;
}
export interface BoePortfoliosTypeForceMandatory {
    portfolioEntry: number;
    portfolioId: string;
    portfolioCode: string;
    portfolioNum: string;
    portfolioDescription: string;
}
export declare namespace BoePortfolios {
    /**
     * Static representation of the [[portfolioEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PORTFOLIO_ENTRY: NumberField<BoePortfolios>;
    /**
     * Static representation of the [[portfolioId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PORTFOLIO_ID: StringField<BoePortfolios>;
    /**
     * Static representation of the [[portfolioCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PORTFOLIO_CODE: StringField<BoePortfolios>;
    /**
     * Static representation of the [[portfolioNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PORTFOLIO_NUM: StringField<BoePortfolios>;
    /**
     * Static representation of the [[portfolioDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PORTFOLIO_DESCRIPTION: StringField<BoePortfolios>;
    /**
     * All fields of the BoePortfolios entity.
     */
    const _allFields: Array<NumberField<BoePortfolios> | StringField<BoePortfolios>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<BoePortfolios>;
    /**
     * All key fields of the BoePortfolios entity.
     */
    const _keyFields: Array<Field<BoePortfolios>>;
    /**
     * Mapping of all key field names to the respective static field property BoePortfolios.
     */
    const _keys: {
        [keys: string]: Field<BoePortfolios>;
    };
}
//# sourceMappingURL=BoePortfolios.d.ts.map