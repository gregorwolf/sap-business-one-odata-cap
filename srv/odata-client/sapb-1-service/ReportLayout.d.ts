import { ReportLayoutItem, ReportLayoutItemField } from './ReportLayoutItem';
import { ReportLayoutTranslationLine, ReportLayoutTranslationLineField } from './ReportLayoutTranslationLine';
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ReportLayout
 */
export interface ReportLayout {
    /**
     * Name.
     * @nullable
     */
    name?: string;
    /**
     * Author.
     * @nullable
     */
    author?: string;
    /**
     * Remarks.
     * @nullable
     */
    remarks?: string;
    /**
     * Width.
     * @nullable
     */
    width?: number;
    /**
     * Height.
     * @nullable
     */
    height?: number;
    /**
     * Left Margin.
     * @nullable
     */
    leftMargin?: number;
    /**
     * Right Margin.
     * @nullable
     */
    rightMargin?: number;
    /**
     * Top Margin.
     * @nullable
     */
    topMargin?: number;
    /**
     * Bottom Margin.
     * @nullable
     */
    bottomMargin?: number;
    /**
     * Paper Size.
     * @nullable
     */
    paperSize?: string;
    /**
     * Grid Size.
     * @nullable
     */
    gridSize?: number;
    /**
     * Picture.
     * @nullable
     */
    picture?: string;
    /**
     * Type Code.
     * @nullable
     */
    typeCode?: string;
    /**
     * Leader Report.
     * @nullable
     */
    leaderReport?: string;
    /**
     * Follow Up Report.
     * @nullable
     */
    followUpReport?: string;
    /**
     * Preview Printing Font.
     * @nullable
     */
    previewPrintingFont?: string;
    /**
     * Change Font Size In Preview.
     * @nullable
     */
    changeFontSizeInPreview?: number;
    /**
     * E Mail Font.
     * @nullable
     */
    eMailFont?: string;
    /**
     * Change Font Size For E Mail.
     * @nullable
     */
    changeFontSizeForEMail?: number;
    /**
     * Query.
     * @nullable
     */
    query?: string;
    /**
     * Language.
     * @nullable
     */
    language?: number;
    /**
     * Imp Exp Obj Code.
     * @nullable
     */
    impExpObjCode?: number;
    /**
     * Extension Name.
     * @nullable
     */
    extensionName?: string;
    /**
     * Repetitive Areas Number.
     * @nullable
     */
    repetitiveAreasNumber?: number;
    /**
     * Layout Code.
     * @nullable
     */
    layoutCode?: string;
    /**
     * Printer.
     * @nullable
     */
    printer?: string;
    /**
     * Printer First Page.
     * @nullable
     */
    printerFirstPage?: string;
    /**
     * Number Of Copies.
     * @nullable
     */
    numberOfCopies?: number;
    /**
     * Localization.
     * @nullable
     */
    localization?: string;
    /**
     * B 1 Version.
     * @nullable
     */
    b1Version?: string;
    /**
     * Cr Version.
     * @nullable
     */
    crVersion?: string;
    /**
     * Type Detail.
     * @nullable
     */
    typeDetail?: string;
    /**
     * Report Layout Items.
     * @nullable
     */
    reportLayoutItems?: ReportLayoutItem;
    /**
     * Report Layout Translation Lines.
     * @nullable
     */
    reportLayoutTranslationLines?: ReportLayoutTranslationLine;
}
/**
 * @deprecated Since v1.6.0. Use [[ReportLayout.build]] instead.
 */
export declare function createReportLayout(json: any): ReportLayout;
/**
 * ReportLayoutField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ReportLayoutField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ReportLayout.name]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    name: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayout.author]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    author: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayout.remarks]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    remarks: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayout.width]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    width: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayout.height]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    height: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayout.leftMargin]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    leftMargin: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayout.rightMargin]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    rightMargin: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayout.topMargin]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    topMargin: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayout.bottomMargin]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bottomMargin: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayout.paperSize]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    paperSize: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayout.gridSize]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    gridSize: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayout.picture]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    picture: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayout.typeCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    typeCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayout.leaderReport]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    leaderReport: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayout.followUpReport]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    followUpReport: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayout.previewPrintingFont]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    previewPrintingFont: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayout.changeFontSizeInPreview]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    changeFontSizeInPreview: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayout.eMailFont]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    eMailFont: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayout.changeFontSizeForEMail]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    changeFontSizeForEMail: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayout.query]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    query: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayout.language]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    language: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayout.impExpObjCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    impExpObjCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayout.extensionName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    extensionName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayout.repetitiveAreasNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    repetitiveAreasNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayout.layoutCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    layoutCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayout.printer]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    printer: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayout.printerFirstPage]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    printerFirstPage: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayout.numberOfCopies]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    numberOfCopies: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayout.localization]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    localization: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayout.b1Version]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    b1Version: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayout.crVersion]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    crVersion: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayout.typeDetail]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    typeDetail: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayout.reportLayoutItems]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    reportLayoutItems: ReportLayoutItemField<EntityT>;
    /**
     * Representation of the [[ReportLayout.reportLayoutTranslationLines]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    reportLayoutTranslationLines: ReportLayoutTranslationLineField<EntityT>;
}
export declare namespace ReportLayout {
    function build(json: {
        [keys: string]: FieldType | ReportLayoutItem | ReportLayoutTranslationLine;
    }): ReportLayout;
}
//# sourceMappingURL=ReportLayout.d.ts.map