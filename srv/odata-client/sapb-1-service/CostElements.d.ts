import { CostElementsRequestBuilder } from './CostElementsRequestBuilder';
import { BoYesNoEnum } from './BoYesNoEnum';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, OneToManyLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "CostElements" of service "SAPB1".
 */
export declare class CostElements extends EntityV4 implements CostElementsType {
    /**
     * Technical entity name for CostElements.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Code.
     * @nullable
     */
    code?: string;
    /**
     * Description.
     * @nullable
     */
    description?: string;
    /**
     * Is Active.
     * @nullable
     */
    isActive?: BoYesNoEnum;
    /**
     * One-to-many navigation property to the [[ChartOfAccounts]] entity.
     */
    chartOfAccounts: ChartOfAccounts[];
    /**
     * Returns an entity builder to construct instances of `CostElements`.
     * @returns A builder that constructs instances of entity type `CostElements`.
     */
    static builder(): EntityBuilderType<CostElements, CostElementsType>;
    /**
     * Returns a request builder to construct requests for operations on the `CostElements` entity type.
     * @returns A `CostElements` request builder.
     */
    static requestBuilder(): CostElementsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CostElements`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CostElements`.
     */
    static customField(fieldName: string): CustomFieldV4<CostElements>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { ChartOfAccounts, ChartOfAccountsType } from './ChartOfAccounts';
export interface CostElementsType {
    code?: string | null;
    description?: string | null;
    isActive?: BoYesNoEnum | null;
    chartOfAccounts: ChartOfAccountsType[];
}
export declare namespace CostElements {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: StringField<CostElements>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<CostElements>;
    /**
     * Static representation of the [[isActive]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_ACTIVE: EnumField<CostElements>;
    /**
     * Static representation of the one-to-many navigation property [[chartOfAccounts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CHART_OF_ACCOUNTS: OneToManyLink<CostElements, ChartOfAccounts>;
    /**
     * All fields of the CostElements entity.
     */
    const _allFields: Array<StringField<CostElements> | EnumField<CostElements> | OneToManyLink<CostElements, ChartOfAccounts>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<CostElements>;
    /**
     * All key fields of the CostElements entity.
     */
    const _keyFields: Array<Field<CostElements>>;
    /**
     * Mapping of all key field names to the respective static field property CostElements.
     */
    const _keys: {
        [keys: string]: Field<CostElements>;
    };
}
//# sourceMappingURL=CostElements.d.ts.map