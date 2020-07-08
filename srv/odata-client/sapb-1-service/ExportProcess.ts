/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * ExportProcess
 */
export interface ExportProcess {
  /**
   * Line Number.
   * @nullable
   */
  lineNumber?: number;
  /**
   * Exportation Document Type Code.
   * @nullable
   */
  exportationDocumentTypeCode?: number;
  /**
   * Exportation Declaration Number.
   * @nullable
   */
  exportationDeclarationNumber?: number;
  /**
   * Exportation Declaration Date.
   * @nullable
   */
  exportationDeclarationDate?: Moment;
  /**
   * Exportation Nature Code.
   * @nullable
   */
  exportationNatureCode?: number;
  /**
   * Exportation Registry Number.
   * @nullable
   */
  exportationRegistryNumber?: number;
  /**
   * Exportation Registry Date.
   * @nullable
   */
  exportationRegistryDate?: Moment;
  /**
   * Lading Bill Number.
   * @nullable
   */
  ladingBillNumber?: string;
  /**
   * Lading Bill Date.
   * @nullable
   */
  ladingBillDate?: Moment;
  /**
   * Merchandise Left Customs Date.
   * @nullable
   */
  merchandiseLeftCustomsDate?: Moment;
  /**
   * Lading Bill Type Code.
   * @nullable
   */
  ladingBillTypeCode?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[ExportProcess.build]] instead.
 */
export function createExportProcess(json: any): ExportProcess {
  return ExportProcess.build(json);
}

/**
 * ExportProcessField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ExportProcessField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ExportProcess.lineNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[ExportProcess.exportationDocumentTypeCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  exportationDocumentTypeCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ExportationDocumentTypeCode', this, 'Edm.Int32');
  /**
   * Representation of the [[ExportProcess.exportationDeclarationNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  exportationDeclarationNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ExportationDeclarationNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[ExportProcess.exportationDeclarationDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  exportationDeclarationDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('ExportationDeclarationDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[ExportProcess.exportationNatureCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  exportationNatureCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ExportationNatureCode', this, 'Edm.Int32');
  /**
   * Representation of the [[ExportProcess.exportationRegistryNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  exportationRegistryNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ExportationRegistryNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[ExportProcess.exportationRegistryDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  exportationRegistryDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('ExportationRegistryDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[ExportProcess.ladingBillNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  ladingBillNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('LadingBillNumber', this, 'Edm.String');
  /**
   * Representation of the [[ExportProcess.ladingBillDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  ladingBillDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('LadingBillDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[ExportProcess.merchandiseLeftCustomsDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  merchandiseLeftCustomsDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('MerchandiseLeftCustomsDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[ExportProcess.ladingBillTypeCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  ladingBillTypeCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LadingBillTypeCode', this, 'Edm.Int32');
}

export namespace ExportProcess {
  export function build(json: { [keys: string]: FieldType }): ExportProcess {
    return createComplexType(json, {
      LineNumber: (lineNumber: number) => ({ lineNumber: edmToTs(lineNumber, 'Edm.Int32') }),
      ExportationDocumentTypeCode: (exportationDocumentTypeCode: number) => ({ exportationDocumentTypeCode: edmToTs(exportationDocumentTypeCode, 'Edm.Int32') }),
      ExportationDeclarationNumber: (exportationDeclarationNumber: number) => ({ exportationDeclarationNumber: edmToTs(exportationDeclarationNumber, 'Edm.Int32') }),
      ExportationDeclarationDate: (exportationDeclarationDate: Moment) => ({ exportationDeclarationDate: edmToTs(exportationDeclarationDate, 'Edm.DateTimeOffset') }),
      ExportationNatureCode: (exportationNatureCode: number) => ({ exportationNatureCode: edmToTs(exportationNatureCode, 'Edm.Int32') }),
      ExportationRegistryNumber: (exportationRegistryNumber: number) => ({ exportationRegistryNumber: edmToTs(exportationRegistryNumber, 'Edm.Int32') }),
      ExportationRegistryDate: (exportationRegistryDate: Moment) => ({ exportationRegistryDate: edmToTs(exportationRegistryDate, 'Edm.DateTimeOffset') }),
      LadingBillNumber: (ladingBillNumber: string) => ({ ladingBillNumber: edmToTs(ladingBillNumber, 'Edm.String') }),
      LadingBillDate: (ladingBillDate: Moment) => ({ ladingBillDate: edmToTs(ladingBillDate, 'Edm.DateTimeOffset') }),
      MerchandiseLeftCustomsDate: (merchandiseLeftCustomsDate: Moment) => ({ merchandiseLeftCustomsDate: edmToTs(merchandiseLeftCustomsDate, 'Edm.DateTimeOffset') }),
      LadingBillTypeCode: (ladingBillTypeCode: number) => ({ ladingBillTypeCode: edmToTs(ladingBillTypeCode, 'Edm.Int32') })
    });
  }
}
