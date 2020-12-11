/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export class ExportProcessField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ExportProcess> {
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

  /**
   * Creates an instance of ExportProcessField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ExportProcess);
  }
}

export namespace ExportProcess {
  /**
   * Metadata information on all properties of the `ExportProcess` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ExportProcess>[] = [{
    originalName: 'LineNumber',
    name: 'lineNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ExportationDocumentTypeCode',
    name: 'exportationDocumentTypeCode',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ExportationDeclarationNumber',
    name: 'exportationDeclarationNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ExportationDeclarationDate',
    name: 'exportationDeclarationDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'ExportationNatureCode',
    name: 'exportationNatureCode',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ExportationRegistryNumber',
    name: 'exportationRegistryNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ExportationRegistryDate',
    name: 'exportationRegistryDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'LadingBillNumber',
    name: 'ladingBillNumber',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'LadingBillDate',
    name: 'ladingBillDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'MerchandiseLeftCustomsDate',
    name: 'merchandiseLeftCustomsDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'LadingBillTypeCode',
    name: 'ladingBillTypeCode',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ExportProcess {
    return deserializeComplexTypeV4(json, ExportProcess);
  }
}
