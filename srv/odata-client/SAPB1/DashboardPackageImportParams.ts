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
 * DashboardPackageImportParams
 */
export interface DashboardPackageImportParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Package File Path.
   * @nullable
   */
  packageFilePath?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Import Queries.
   * @nullable
   */
  importQueries?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Force Overwrite Query.
   * @nullable
   */
  forceOverwriteQuery?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Force Overwrite Package.
   * @nullable
   */
  forceOverwritePackage?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
}

/**
 * DashboardPackageImportParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class DashboardPackageImportParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  DashboardPackageImportParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link DashboardPackageImportParams.packageFilePath} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  packageFilePath: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PackageFilePath',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DashboardPackageImportParams.importQueries} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  importQueries: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('ImportQueries', BoYesNoEnum, true);
  /**
   * Representation of the {@link DashboardPackageImportParams.forceOverwriteQuery} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  forceOverwriteQuery: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'ForceOverwriteQuery',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link DashboardPackageImportParams.forceOverwritePackage} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  forceOverwritePackage: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'ForceOverwritePackage',
    BoYesNoEnum,
    true
  );

  /**
   * Creates an instance of DashboardPackageImportParamsField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(
      fieldName,
      fieldOf,
      deSerializers,
      DashboardPackageImportParams,
      fieldOptions
    );
  }
}

export namespace DashboardPackageImportParams {
  /**
   * Metadata information on all properties of the `DashboardPackageImportParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DashboardPackageImportParams>[] =
    [
      {
        originalName: 'PackageFilePath',
        name: 'packageFilePath',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'ImportQueries',
        name: 'importQueries',
        type: 'Edm.Enum',
        isCollection: false
      },
      {
        originalName: 'ForceOverwriteQuery',
        name: 'forceOverwriteQuery',
        type: 'Edm.Enum',
        isCollection: false
      },
      {
        originalName: 'ForceOverwritePackage',
        name: 'forceOverwritePackage',
        type: 'Edm.Enum',
        isCollection: false
      }
    ];
}
