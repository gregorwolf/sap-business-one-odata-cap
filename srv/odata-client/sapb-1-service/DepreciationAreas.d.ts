import { DepreciationAreasRequestBuilder } from './DepreciationAreasRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "DepreciationAreas" of service "SAPB1".
 */
export declare class DepreciationAreas extends Entity implements DepreciationAreasType {
    /**
     * Technical entity name for DepreciationAreas.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for DepreciationAreas.
     */
    static _serviceName: string;
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
     * Derived Area.
     * @nullable
     */
    derivedArea?: string;
    /**
     * Tax Type.
     * @nullable
     */
    taxType?: number;
    /**
     * Bp For Tax Correction.
     * @nullable
     */
    bpForTaxCorrection?: string;
    /**
     * Item For Tax Correction.
     * @nullable
     */
    itemForTaxCorrection?: string;
    /**
     * Usage For Tax Correction.
     * @nullable
     */
    usageForTaxCorrection?: number;
    /**
     * One-to-many navigation property to the [[AssetTransfer]] entity.
     */
    assetTransfer: AssetTransfer[];
    /**
     * One-to-many navigation property to the [[AssetRetirement]] entity.
     */
    assetRetirement: AssetRetirement[];
    /**
     * One-to-many navigation property to the [[AssetCapitalizationCreditMemo]] entity.
     */
    assetCapitalizationCreditMemo: AssetCapitalizationCreditMemo[];
    /**
     * One-to-one navigation property to the [[SalesTaxAuthoritiesTypes]] entity.
     */
    salesTaxAuthoritiesType: SalesTaxAuthoritiesTypes;
    /**
     * One-to-one navigation property to the [[BusinessPartners]] entity.
     */
    businessPartner: BusinessPartners;
    /**
     * One-to-one navigation property to the [[Items]] entity.
     */
    item: Items;
    /**
     * One-to-many navigation property to the [[AssetCapitalization]] entity.
     */
    assetCapitalization: AssetCapitalization[];
    /**
     * One-to-many navigation property to the [[AssetManualDepreciation]] entity.
     */
    assetManualDepreciation: AssetManualDepreciation[];
    /**
     * Returns an entity builder to construct instances `DepreciationAreas`.
     * @returns A builder that constructs instances of entity type `DepreciationAreas`.
     */
    static builder(): EntityBuilderType<DepreciationAreas, DepreciationAreasTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `DepreciationAreas` entity type.
     * @returns A `DepreciationAreas` request builder.
     */
    static requestBuilder(): DepreciationAreasRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `DepreciationAreas`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `DepreciationAreas`.
     */
    static customField(fieldName: string): CustomField<DepreciationAreas>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { AssetTransfer, AssetTransferType } from './AssetTransfer';
import { AssetRetirement, AssetRetirementType } from './AssetRetirement';
import { AssetCapitalizationCreditMemo, AssetCapitalizationCreditMemoType } from './AssetCapitalizationCreditMemo';
import { SalesTaxAuthoritiesTypes, SalesTaxAuthoritiesTypesType } from './SalesTaxAuthoritiesTypes';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { Items, ItemsType } from './Items';
import { AssetCapitalization, AssetCapitalizationType } from './AssetCapitalization';
import { AssetManualDepreciation, AssetManualDepreciationType } from './AssetManualDepreciation';
export interface DepreciationAreasType {
    code?: string;
    description?: string;
    derivedArea?: string;
    taxType?: number;
    bpForTaxCorrection?: string;
    itemForTaxCorrection?: string;
    usageForTaxCorrection?: number;
    assetTransfer: AssetTransferType[];
    assetRetirement: AssetRetirementType[];
    assetCapitalizationCreditMemo: AssetCapitalizationCreditMemoType[];
    salesTaxAuthoritiesType: SalesTaxAuthoritiesTypesType;
    businessPartner: BusinessPartnersType;
    item: ItemsType;
    assetCapitalization: AssetCapitalizationType[];
    assetManualDepreciation: AssetManualDepreciationType[];
}
export interface DepreciationAreasTypeForceMandatory {
    code: string;
    description: string;
    derivedArea: string;
    taxType: number;
    bpForTaxCorrection: string;
    itemForTaxCorrection: string;
    usageForTaxCorrection: number;
    assetTransfer: AssetTransferType[];
    assetRetirement: AssetRetirementType[];
    assetCapitalizationCreditMemo: AssetCapitalizationCreditMemoType[];
    salesTaxAuthoritiesType: SalesTaxAuthoritiesTypesType;
    businessPartner: BusinessPartnersType;
    item: ItemsType;
    assetCapitalization: AssetCapitalizationType[];
    assetManualDepreciation: AssetManualDepreciationType[];
}
export declare namespace DepreciationAreas {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: StringField<DepreciationAreas>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<DepreciationAreas>;
    /**
     * Static representation of the [[derivedArea]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DERIVED_AREA: StringField<DepreciationAreas>;
    /**
     * Static representation of the [[taxType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_TYPE: NumberField<DepreciationAreas>;
    /**
     * Static representation of the [[bpForTaxCorrection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_FOR_TAX_CORRECTION: StringField<DepreciationAreas>;
    /**
     * Static representation of the [[itemForTaxCorrection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_FOR_TAX_CORRECTION: StringField<DepreciationAreas>;
    /**
     * Static representation of the [[usageForTaxCorrection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USAGE_FOR_TAX_CORRECTION: NumberField<DepreciationAreas>;
    /**
     * Static representation of the one-to-many navigation property [[assetTransfer]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ASSET_TRANSFER: OneToManyLink<DepreciationAreas, AssetTransfer>;
    /**
     * Static representation of the one-to-many navigation property [[assetRetirement]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ASSET_RETIREMENT: OneToManyLink<DepreciationAreas, AssetRetirement>;
    /**
     * Static representation of the one-to-many navigation property [[assetCapitalizationCreditMemo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ASSET_CAPITALIZATION_CREDIT_MEMO: OneToManyLink<DepreciationAreas, AssetCapitalizationCreditMemo>;
    /**
     * Static representation of the one-to-one navigation property [[salesTaxAuthoritiesType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_TAX_AUTHORITIES_TYPE: OneToOneLink<DepreciationAreas, SalesTaxAuthoritiesTypes>;
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER: OneToOneLink<DepreciationAreas, BusinessPartners>;
    /**
     * Static representation of the one-to-one navigation property [[item]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM: OneToOneLink<DepreciationAreas, Items>;
    /**
     * Static representation of the one-to-many navigation property [[assetCapitalization]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ASSET_CAPITALIZATION: OneToManyLink<DepreciationAreas, AssetCapitalization>;
    /**
     * Static representation of the one-to-many navigation property [[assetManualDepreciation]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ASSET_MANUAL_DEPRECIATION: OneToManyLink<DepreciationAreas, AssetManualDepreciation>;
    /**
     * All fields of the DepreciationAreas entity.
     */
    const _allFields: Array<StringField<DepreciationAreas> | NumberField<DepreciationAreas> | OneToManyLink<DepreciationAreas, AssetTransfer> | OneToManyLink<DepreciationAreas, AssetRetirement> | OneToManyLink<DepreciationAreas, AssetCapitalizationCreditMemo> | OneToOneLink<DepreciationAreas, SalesTaxAuthoritiesTypes> | OneToOneLink<DepreciationAreas, BusinessPartners> | OneToOneLink<DepreciationAreas, Items> | OneToManyLink<DepreciationAreas, AssetCapitalization> | OneToManyLink<DepreciationAreas, AssetManualDepreciation>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<DepreciationAreas>;
    /**
     * All key fields of the DepreciationAreas entity.
     */
    const _keyFields: Array<Field<DepreciationAreas>>;
    /**
     * Mapping of all key field names to the respective static field property DepreciationAreas.
     */
    const _keys: {
        [keys: string]: Field<DepreciationAreas>;
    };
}
//# sourceMappingURL=DepreciationAreas.d.ts.map