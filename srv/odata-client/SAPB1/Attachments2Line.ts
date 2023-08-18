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
 * Attachments2Line
 */
export interface Attachments2Line<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Absolute Entry.
   * @nullable
   */
  absoluteEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Line Num.
   * @nullable
   */
  lineNum?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Source Path.
   * @nullable
   */
  sourcePath?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * File Name.
   * @nullable
   */
  fileName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * File Extension.
   * @nullable
   */
  fileExtension?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Attachment Date.
   * @nullable
   */
  attachmentDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * User Id.
   * @nullable
   */
  userId?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Override.
   * @nullable
   */
  override?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Free Text.
   * @nullable
   */
  freeText?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Copy To Target Doc.
   * @nullable
   */
  copyToTargetDoc?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Copy To Production Order.
   * @nullable
   */
  copyToProductionOrder?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * E Doc Sign.
   * @nullable
   */
  eDocSign?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Target Path.
   * @nullable
   */
  targetPath?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Sub Path.
   * @nullable
   */
  subPath?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * Attachments2LineField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class Attachments2LineField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  Attachments2Line,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link Attachments2Line.absoluteEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absoluteEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AbsoluteEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link Attachments2Line.lineNum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LineNum', 'Edm.Int32', true);
  /**
   * Representation of the {@link Attachments2Line.sourcePath} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sourcePath: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SourcePath', 'Edm.String', true);
  /**
   * Representation of the {@link Attachments2Line.fileName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fileName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('FileName', 'Edm.String', true);
  /**
   * Representation of the {@link Attachments2Line.fileExtension} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fileExtension: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('FileExtension', 'Edm.String', true);
  /**
   * Representation of the {@link Attachments2Line.attachmentDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attachmentDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AttachmentDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link Attachments2Line.userId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  userId: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('UserID', BoYesNoEnum, true);
  /**
   * Representation of the {@link Attachments2Line.override} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  override: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('Override', BoYesNoEnum, true);
  /**
   * Representation of the {@link Attachments2Line.freeText} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  freeText: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('FreeText', 'Edm.String', true);
  /**
   * Representation of the {@link Attachments2Line.copyToTargetDoc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  copyToTargetDoc: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField('CopyToTargetDoc', BoYesNoEnum, true);
  /**
   * Representation of the {@link Attachments2Line.copyToProductionOrder} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  copyToProductionOrder: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'CopyToProductionOrder',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link Attachments2Line.eDocSign} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  eDocSign: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('EDocSign', BoYesNoEnum, true);
  /**
   * Representation of the {@link Attachments2Line.targetPath} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  targetPath: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TargetPath', 'Edm.String', true);
  /**
   * Representation of the {@link Attachments2Line.subPath} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  subPath: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SubPath', 'Edm.String', true);

  /**
   * Creates an instance of Attachments2LineField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, Attachments2Line, fieldOptions);
  }
}

export namespace Attachments2Line {
  /**
   * Metadata information on all properties of the `Attachments2Line` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<Attachments2Line>[] = [
    {
      originalName: 'AbsoluteEntry',
      name: 'absoluteEntry',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'LineNum',
      name: 'lineNum',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'SourcePath',
      name: 'sourcePath',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'FileName',
      name: 'fileName',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'FileExtension',
      name: 'fileExtension',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'AttachmentDate',
      name: 'attachmentDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'UserID',
      name: 'userId',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'Override',
      name: 'override',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'FreeText',
      name: 'freeText',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CopyToTargetDoc',
      name: 'copyToTargetDoc',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'CopyToProductionOrder',
      name: 'copyToProductionOrder',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'EDocSign',
      name: 'eDocSign',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'TargetPath',
      name: 'targetPath',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'SubPath',
      name: 'subPath',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
