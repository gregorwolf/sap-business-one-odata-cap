import { Moment } from 'moment';
import { WtGroups, WtGroupsField } from './WtGroups';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * WithholdingTaxCertificatesData
 */
export interface WithholdingTaxCertificatesData {
    /**
     * Poi Code Ref.
     * @nullable
     */
    poiCodeRef?: string;
    /**
     * Poi Code.
     * @nullable
     */
    poiCode?: string;
    /**
     * Certificate.
     * @nullable
     */
    certificate?: string;
    /**
     * W Tax Type.
     * @nullable
     */
    wTaxType?: string;
    /**
     * Period Indicator.
     * @nullable
     */
    periodIndicator?: string;
    /**
     * Wht Abs Id.
     * @nullable
     */
    whtAbsId?: number;
    /**
     * Series.
     * @nullable
     */
    series?: number;
    /**
     * Number.
     * @nullable
     */
    number?: number;
    /**
     * Issue Date.
     * @nullable
     */
    issueDate?: Moment;
    /**
     * Sum Vat Amount.
     * @nullable
     */
    sumVatAmount?: number;
    /**
     * Sum Doc Total.
     * @nullable
     */
    sumDocTotal?: number;
    /**
     * Sum Base Amount.
     * @nullable
     */
    sumBaseAmount?: number;
    /**
     * Sum Accum Amount.
     * @nullable
     */
    sumAccumAmount?: number;
    /**
     * Sum Perc Amount.
     * @nullable
     */
    sumPercAmount?: number;
    /**
     * Wt Groups Collection.
     * @nullable
     */
    wtGroupsCollection?: WtGroups;
}
/**
 * @deprecated Since v1.6.0. Use [[WithholdingTaxCertificatesData.build]] instead.
 */
export declare function createWithholdingTaxCertificatesData(json: any): WithholdingTaxCertificatesData;
/**
 * WithholdingTaxCertificatesDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class WithholdingTaxCertificatesDataField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[WithholdingTaxCertificatesData.poiCodeRef]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    poiCodeRef: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxCertificatesData.poiCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    poiCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxCertificatesData.certificate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    certificate: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxCertificatesData.wTaxType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    wTaxType: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxCertificatesData.periodIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    periodIndicator: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxCertificatesData.whtAbsId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    whtAbsId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxCertificatesData.series]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    series: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxCertificatesData.number]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    number: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxCertificatesData.issueDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    issueDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxCertificatesData.sumVatAmount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sumVatAmount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxCertificatesData.sumDocTotal]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sumDocTotal: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxCertificatesData.sumBaseAmount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sumBaseAmount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxCertificatesData.sumAccumAmount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sumAccumAmount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxCertificatesData.sumPercAmount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sumPercAmount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxCertificatesData.wtGroupsCollection]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    wtGroupsCollection: WtGroupsField<EntityT>;
}
export declare namespace WithholdingTaxCertificatesData {
    function build(json: {
        [keys: string]: FieldType | WtGroups;
    }): WithholdingTaxCertificatesData;
}
//# sourceMappingURL=WithholdingTaxCertificatesData.d.ts.map