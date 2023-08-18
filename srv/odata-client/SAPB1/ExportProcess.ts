/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CollectionField,
  ComplexTypeField,
  ConstructorOrField,
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  EdmTypeField,
  Entity,
  EnumField,
  FieldBuilder,
  FieldOptions,
  OrderableEdmTypeField,
  PropertyMetadata
} from '@sap-cloud-sdk/odata-v4';

/**
 * ExportProcess
 */
export interface ExportProcess<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Line Number.
   * @nullable
   */
  lineNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Exportation Document Type Code.
   * @nullable
   */
  exportationDocumentTypeCode?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Exportation Declaration Number.
   * @nullable
   */
  exportationDeclarationNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Exportation Declaration Date.
   * @nullable
   */
  exportationDeclarationDate?: DeserializedType<
    DeSerializersT,
    'Edm.DateTimeOffset'
  >;
  /**
   * Exportation Nature Code.
   * @nullable
   */
  exportationNatureCode?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Exportation Registry Number.
   * @nullable
   */
  exportationRegistryNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Exportation Registry Date.
   * @nullable
   */
  exportationRegistryDate?: DeserializedType<
    DeSerializersT,
    'Edm.DateTimeOffset'
  >;
  /**
   * Lading Bill Number.
   * @nullable
   */
  ladingBillNumber?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Lading Bill Date.
   * @nullable
   */
  ladingBillDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Merchandise Left Customs Date.
   * @nullable
   */
  merchandiseLeftCustomsDate?: DeserializedType<
    DeSerializersT,
    'Edm.DateTimeOffset'
  >;
  /**
   * Lading Bill Type Code.
   * @nullable
   */
  ladingBillTypeCode?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Drawback Suspension Regime.
   * @nullable
   */
  drawbackSuspensionRegime?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Nature Of Export.
   * @nullable
   */
  natureOfExport?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Quantity Of Exported Items.
   * @nullable
   */
  quantityOfExportedItems?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Additional Item Sequential Number.
   * @nullable
   */
  additionalItemSequentialNumber?: DeserializedType<
    DeSerializersT,
    'Edm.Int32'
  >;
}

/**
 * ExportProcessField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ExportProcessField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ExportProcess,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ExportProcess.lineNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LineNumber', 'Edm.Int32', true);
  /**
   * Representation of the {@link ExportProcess.exportationDocumentTypeCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  exportationDocumentTypeCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ExportationDocumentTypeCode',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link ExportProcess.exportationDeclarationNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  exportationDeclarationNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ExportationDeclarationNumber',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link ExportProcess.exportationDeclarationDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  exportationDeclarationDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ExportationDeclarationDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link ExportProcess.exportationNatureCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  exportationNatureCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ExportationNatureCode',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link ExportProcess.exportationRegistryNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  exportationRegistryNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ExportationRegistryNumber',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link ExportProcess.exportationRegistryDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  exportationRegistryDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ExportationRegistryDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link ExportProcess.ladingBillNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  ladingBillNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'LadingBillNumber',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ExportProcess.ladingBillDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  ladingBillDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'LadingBillDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link ExportProcess.merchandiseLeftCustomsDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  merchandiseLeftCustomsDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'MerchandiseLeftCustomsDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link ExportProcess.ladingBillTypeCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  ladingBillTypeCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'LadingBillTypeCode',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link ExportProcess.drawbackSuspensionRegime} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  drawbackSuspensionRegime: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DrawbackSuspensionRegime',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ExportProcess.natureOfExport} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  natureOfExport: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'NatureOfExport',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ExportProcess.quantityOfExportedItems} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  quantityOfExportedItems: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'QuantityOfExportedItems',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link ExportProcess.additionalItemSequentialNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  additionalItemSequentialNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AdditionalItemSequentialNumber',
    'Edm.Int32',
    true
  );

  /**
   * Creates an instance of ExportProcessField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, ExportProcess, fieldOptions);
  }
}

export namespace ExportProcess {
  /**
   * Metadata information on all properties of the `ExportProcess` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ExportProcess>[] = [
    {
      originalName: 'LineNumber',
      name: 'lineNumber',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'ExportationDocumentTypeCode',
      name: 'exportationDocumentTypeCode',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'ExportationDeclarationNumber',
      name: 'exportationDeclarationNumber',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'ExportationDeclarationDate',
      name: 'exportationDeclarationDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'ExportationNatureCode',
      name: 'exportationNatureCode',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'ExportationRegistryNumber',
      name: 'exportationRegistryNumber',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'ExportationRegistryDate',
      name: 'exportationRegistryDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'LadingBillNumber',
      name: 'ladingBillNumber',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'LadingBillDate',
      name: 'ladingBillDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'MerchandiseLeftCustomsDate',
      name: 'merchandiseLeftCustomsDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'LadingBillTypeCode',
      name: 'ladingBillTypeCode',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'DrawbackSuspensionRegime',
      name: 'drawbackSuspensionRegime',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'NatureOfExport',
      name: 'natureOfExport',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'QuantityOfExportedItems',
      name: 'quantityOfExportedItems',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'AdditionalItemSequentialNumber',
      name: 'additionalItemSequentialNumber',
      type: 'Edm.Int32',
      isCollection: false
    }
  ];
}
