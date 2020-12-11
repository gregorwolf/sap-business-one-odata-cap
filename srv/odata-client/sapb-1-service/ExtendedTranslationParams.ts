/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TranslationCategoryEnum } from './TranslationCategoryEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * ExtendedTranslationParams
 */
export interface ExtendedTranslationParams {
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: number;
  /**
   * Category.
   * @nullable
   */
  category?: TranslationCategoryEnum;
  /**
   * Id.
   * @nullable
   */
  id?: string;
  /**
   * Secondary Id.
   * @nullable
   */
  secondaryId?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[ExtendedTranslationParams.build]] instead.
 */
export function createExtendedTranslationParams(json: any): ExtendedTranslationParams {
  return ExtendedTranslationParams.build(json);
}

/**
 * ExtendedTranslationParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ExtendedTranslationParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ExtendedTranslationParams> {
  /**
   * Representation of the [[ExtendedTranslationParams.docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[ExtendedTranslationParams.category]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  category: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Category', this);
  /**
   * Representation of the [[ExtendedTranslationParams.id]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  id: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ID', this, 'Edm.String');
  /**
   * Representation of the [[ExtendedTranslationParams.secondaryId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  secondaryId: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('SecondaryID', this, 'Edm.String');

  /**
   * Creates an instance of ExtendedTranslationParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ExtendedTranslationParams);
  }
}

export namespace ExtendedTranslationParams {
  /**
   * Metadata information on all properties of the `ExtendedTranslationParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ExtendedTranslationParams>[] = [{
    originalName: 'DocEntry',
    name: 'docEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Category',
    name: 'category',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'ID',
    name: 'id',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'SecondaryID',
    name: 'secondaryId',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ExtendedTranslationParams {
    return deserializeComplexTypeV4(json, ExtendedTranslationParams);
  }
}
