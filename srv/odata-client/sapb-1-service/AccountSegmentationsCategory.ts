/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * AccountSegmentationsCategory
 */
export interface AccountSegmentationsCategory {
  /**
   * Segment Id.
   * @nullable
   */
  segmentId?: number;
  /**
   * Code.
   * @nullable
   */
  code?: string;
  /**
   * Name.
   * @nullable
   */
  name?: string;
  /**
   * Short Name.
   * @nullable
   */
  shortName?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[AccountSegmentationsCategory.build]] instead.
 */
export function createAccountSegmentationsCategory(json: any): AccountSegmentationsCategory {
  return AccountSegmentationsCategory.build(json);
}

/**
 * AccountSegmentationsCategoryField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class AccountSegmentationsCategoryField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, AccountSegmentationsCategory> {
  /**
   * Representation of the [[AccountSegmentationsCategory.segmentId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  segmentId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SegmentID', this, 'Edm.Int32');
  /**
   * Representation of the [[AccountSegmentationsCategory.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Code', this, 'Edm.String');
  /**
   * Representation of the [[AccountSegmentationsCategory.name]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  name: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Name', this, 'Edm.String');
  /**
   * Representation of the [[AccountSegmentationsCategory.shortName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shortName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ShortName', this, 'Edm.String');

  /**
   * Creates an instance of AccountSegmentationsCategoryField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, AccountSegmentationsCategory);
  }
}

export namespace AccountSegmentationsCategory {
  /**
   * Metadata information on all properties of the `AccountSegmentationsCategory` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<AccountSegmentationsCategory>[] = [{
    originalName: 'SegmentID',
    name: 'segmentId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Code',
    name: 'code',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Name',
    name: 'name',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ShortName',
    name: 'shortName',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): AccountSegmentationsCategory {
    return deserializeComplexTypeV4(json, AccountSegmentationsCategory);
  }
}
