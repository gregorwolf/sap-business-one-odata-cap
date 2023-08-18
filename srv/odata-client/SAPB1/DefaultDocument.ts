/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoYesNoEnum } from './BoYesNoEnum';
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
 * DefaultDocument
 */
export interface DefaultDocument<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Add Export.
   * @nullable
   */
  addExport?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Add Print.
   * @nullable
   */
  addPrint?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Code.
   * @nullable
   */
  code?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * English Keyboard Entering Bpc.
   * @nullable
   */
  englishKeyboardEnteringBpc?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Noof Copies.
   * @nullable
   */
  noofCopies?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Noof Copiesfor Manual Doc.
   * @nullable
   */
  noofCopiesforManualDoc?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Object Type.
   * @nullable
   */
  objectType?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Permanent Remark.
   * @nullable
   */
  permanentRemark?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Print Discount Data.
   * @nullable
   */
  printDiscountData?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Print Toals.
   * @nullable
   */
  printToals?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Print Vendor Catalog No.
   * @nullable
   */
  printVendorCatalogNo?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Totals Rounding.
   * @nullable
   */
  totalsRounding?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
}

/**
 * DefaultDocumentField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class DefaultDocumentField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  DefaultDocument,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link DefaultDocument.addExport} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  addExport: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('AddExport', BoYesNoEnum, true);
  /**
   * Representation of the {@link DefaultDocument.addPrint} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  addPrint: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('AddPrint', BoYesNoEnum, true);
  /**
   * Representation of the {@link DefaultDocument.code} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Code', 'Edm.String', true);
  /**
   * Representation of the {@link DefaultDocument.englishKeyboardEnteringBpc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  englishKeyboardEnteringBpc: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'EnglishKeyboardEnteringBPC',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link DefaultDocument.noofCopies} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  noofCopies: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('NoofCopies', 'Edm.Int32', true);
  /**
   * Representation of the {@link DefaultDocument.noofCopiesforManualDoc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  noofCopiesforManualDoc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'NoofCopiesforManualDoc',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link DefaultDocument.objectType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  objectType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ObjectType', 'Edm.String', true);
  /**
   * Representation of the {@link DefaultDocument.permanentRemark} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  permanentRemark: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PermanentRemark',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DefaultDocument.printDiscountData} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  printDiscountData: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField('PrintDiscountData', BoYesNoEnum, true);
  /**
   * Representation of the {@link DefaultDocument.printToals} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  printToals: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('PrintToals', BoYesNoEnum, true);
  /**
   * Representation of the {@link DefaultDocument.printVendorCatalogNo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  printVendorCatalogNo: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'PrintVendorCatalogNo',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link DefaultDocument.totalsRounding} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  totalsRounding: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('TotalsRounding', BoYesNoEnum, true);

  /**
   * Creates an instance of DefaultDocumentField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, DefaultDocument, fieldOptions);
  }
}

export namespace DefaultDocument {
  /**
   * Metadata information on all properties of the `DefaultDocument` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DefaultDocument>[] = [
    {
      originalName: 'AddExport',
      name: 'addExport',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'AddPrint',
      name: 'addPrint',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'Code',
      name: 'code',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'EnglishKeyboardEnteringBPC',
      name: 'englishKeyboardEnteringBpc',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'NoofCopies',
      name: 'noofCopies',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'NoofCopiesforManualDoc',
      name: 'noofCopiesforManualDoc',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'ObjectType',
      name: 'objectType',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'PermanentRemark',
      name: 'permanentRemark',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'PrintDiscountData',
      name: 'printDiscountData',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'PrintToals',
      name: 'printToals',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'PrintVendorCatalogNo',
      name: 'printVendorCatalogNo',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'TotalsRounding',
      name: 'totalsRounding',
      type: 'Edm.Enum',
      isCollection: false
    }
  ];
}
