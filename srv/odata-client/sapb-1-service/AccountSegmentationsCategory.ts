/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class AccountSegmentationsCategoryField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}

export namespace AccountSegmentationsCategory {
  export function build(json: { [keys: string]: FieldType }): AccountSegmentationsCategory {
    return createComplexType(json, {
      SegmentID: (segmentId: number) => ({ segmentId: edmToTs(segmentId, 'Edm.Int32') }),
      Code: (code: string) => ({ code: edmToTs(code, 'Edm.String') }),
      Name: (name: string) => ({ name: edmToTs(name, 'Edm.String') }),
      ShortName: (shortName: string) => ({ shortName: edmToTs(shortName, 'Edm.String') })
    });
  }
}
