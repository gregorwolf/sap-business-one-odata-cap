import { AccountSegmentationsRequestBuilder } from './AccountSegmentationsRequestBuilder';
import { AccountSegmentationsCategory } from './AccountSegmentationsCategory';
import { AllFields, CollectionField, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "AccountSegmentations" of service "SAPB1".
 */
export declare class AccountSegmentations extends Entity implements AccountSegmentationsType {
    /**
     * Technical entity name for AccountSegmentations.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for AccountSegmentations.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Numerator.
     * @nullable
     */
    numerator?: number;
    /**
     * Name.
     * @nullable
     */
    name?: string;
    /**
     * Size.
     * @nullable
     */
    size?: number;
    /**
     * Account Segmentations Categories.
     * @nullable
     */
    accountSegmentationsCategories?: AccountSegmentationsCategory[];
    /**
     * One-to-many navigation property to the [[AccountSegmentationCategories]] entity.
     */
    accountSegmentationCategories: AccountSegmentationCategories[];
    /**
     * Returns an entity builder to construct instances `AccountSegmentations`.
     * @returns A builder that constructs instances of entity type `AccountSegmentations`.
     */
    static builder(): EntityBuilderType<AccountSegmentations, AccountSegmentationsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `AccountSegmentations` entity type.
     * @returns A `AccountSegmentations` request builder.
     */
    static requestBuilder(): AccountSegmentationsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `AccountSegmentations`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `AccountSegmentations`.
     */
    static customField(fieldName: string): CustomField<AccountSegmentations>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { AccountSegmentationCategories, AccountSegmentationCategoriesType } from './AccountSegmentationCategories';
export interface AccountSegmentationsType {
    numerator?: number;
    name?: string;
    size?: number;
    accountSegmentationsCategories?: AccountSegmentationsCategory[];
    accountSegmentationCategories: AccountSegmentationCategoriesType[];
}
export interface AccountSegmentationsTypeForceMandatory {
    numerator: number;
    name: string;
    size: number;
    accountSegmentationsCategories: AccountSegmentationsCategory[];
    accountSegmentationCategories: AccountSegmentationCategoriesType[];
}
export declare namespace AccountSegmentations {
    /**
     * Static representation of the [[numerator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NUMERATOR: NumberField<AccountSegmentations>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<AccountSegmentations>;
    /**
     * Static representation of the [[size]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SIZE: NumberField<AccountSegmentations>;
    /**
     * Static representation of the [[accountSegmentationsCategories]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACCOUNT_SEGMENTATIONS_CATEGORIES: CollectionField<AccountSegmentations>;
    /**
     * Static representation of the one-to-many navigation property [[accountSegmentationCategories]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACCOUNT_SEGMENTATION_CATEGORIES: OneToManyLink<AccountSegmentations, AccountSegmentationCategories>;
    /**
     * All fields of the AccountSegmentations entity.
     */
    const _allFields: Array<NumberField<AccountSegmentations> | StringField<AccountSegmentations> | CollectionField<AccountSegmentations> | OneToManyLink<AccountSegmentations, AccountSegmentationCategories>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<AccountSegmentations>;
    /**
     * All key fields of the AccountSegmentations entity.
     */
    const _keyFields: Array<Field<AccountSegmentations>>;
    /**
     * Mapping of all key field names to the respective static field property AccountSegmentations.
     */
    const _keys: {
        [keys: string]: Field<AccountSegmentations>;
    };
}
//# sourceMappingURL=AccountSegmentations.d.ts.map