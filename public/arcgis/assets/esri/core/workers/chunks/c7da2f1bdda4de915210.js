'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [4325],
  {
    95648: (E, _, R) => {
      var T,
        e,
        A,
        n,
        N,
        C,
        S,
        i,
        t,
        O,
        I,
        o,
        r,
        L,
        P,
        D,
        M,
        u,
        l,
        B,
        U,
        a,
        G,
        c,
        F,
        f,
        d,
        H,
        s,
        p,
        g,
        m,
        Y,
        X,
        V,
        h,
        W,
        x,
        y,
        v,
        b,
        k,
        w,
        K,
        Z,
        Q,
        J,
        q,
        z,
        j,
        $,
        EE,
        _E,
        RE,
        TE,
        eE,
        AE,
        nE,
        NE,
        CE;
      R.d(_, {
        v2: () => A,
        UR: () => D,
        zV: () => P,
        RL: () => T,
        Tx: () => N,
        eZ: () => S,
        DD: () => i,
        Ky: () => t,
        TF: () => l,
        Em: () => B,
        $y: () => U,
        id: () => c,
        zQ: () => d,
        Dd: () => H,
        AH: () => e,
        kP: () => V,
        sj: () => h,
        r4: () => y,
        JS: () => K,
        bj: () => Z,
        CS: () => Q,
        Lh: () => J,
        UX: () => TE,
        Qb: () => eE,
        RS: () => nE,
      }),
        (function (E) {
          (E[(E.BUTT = 0)] = 'BUTT'),
            (E[(E.ROUND = 1)] = 'ROUND'),
            (E[(E.SQUARE = 2)] = 'SQUARE'),
            (E[(E.UNKNOWN = 4)] = 'UNKNOWN');
        })(T || (T = {})),
        (function (E) {
          (E[(E.BEVEL = 0)] = 'BEVEL'),
            (E[(E.ROUND = 1)] = 'ROUND'),
            (E[(E.MITER = 2)] = 'MITER'),
            (E[(E.UNKNOWN = 4)] = 'UNKNOWN');
        })(e || (e = {})),
        (function (E) {
          (E[(E.SCREEN = 0)] = 'SCREEN'), (E[(E.MAP = 1)] = 'MAP');
        })(A || (A = {})),
        (function (E) {
          (E[(E.Tint = 0)] = 'Tint'),
            (E[(E.Ignore = 1)] = 'Ignore'),
            (E[(E.Multiply = 99)] = 'Multiply');
        })(n || (n = {})),
        (function (E) {
          (E.Both = 'Both'),
            (E.JustBegin = 'JustBegin'),
            (E.JustEnd = 'JustEnd'),
            (E.None = 'None');
        })(N || (N = {})),
        (function (E) {
          (E[(E.Mosaic = 0)] = 'Mosaic'), (E[(E.Centered = 1)] = 'Centered');
        })(C || (C = {})),
        (function (E) {
          (E[(E.Normal = 0)] = 'Normal'),
            (E[(E.Superscript = 1)] = 'Superscript'),
            (E[(E.Subscript = 2)] = 'Subscript');
        })(S || (S = {})),
        (function (E) {
          (E[(E.MSSymbol = 0)] = 'MSSymbol'), (E[(E.Unicode = 1)] = 'Unicode');
        })(i || (i = {})),
        (function (E) {
          (E[(E.Unspecified = 0)] = 'Unspecified'),
            (E[(E.TrueType = 1)] = 'TrueType'),
            (E[(E.PSOpenType = 2)] = 'PSOpenType'),
            (E[(E.TTOpenType = 3)] = 'TTOpenType'),
            (E[(E.Type1 = 4)] = 'Type1');
        })(t || (t = {})),
        (function (E) {
          (E[(E.Display = 0)] = 'Display'), (E[(E.Map = 1)] = 'Map');
        })(O || (O = {})),
        (function (E) {
          (E[(E.Z = 0)] = 'Z'), (E[(E.X = 1)] = 'X'), (E[(E.Y = 2)] = 'Y');
        })(I || (I = {})),
        (function (E) {
          (E[(E.XYZ = 0)] = 'XYZ'),
            (E[(E.ZXY = 1)] = 'ZXY'),
            (E[(E.YXZ = 2)] = 'YXZ');
        })(o || (o = {})),
        (function (E) {
          (E[(E.Rectangle = 0)] = 'Rectangle'),
            (E[(E.RoundedRectangle = 1)] = 'RoundedRectangle'),
            (E[(E.Oval = 2)] = 'Oval');
        })(r || (r = {})),
        (function (E) {
          (E[(E.None = 0)] = 'None'),
            (E[(E.Alpha = 1)] = 'Alpha'),
            (E[(E.Screen = 2)] = 'Screen'),
            (E[(E.Multiply = 3)] = 'Multiply'),
            (E[(E.Add = 4)] = 'Add');
        })(L || (L = {})),
        (function (E) {
          (E[(E.TTB = 0)] = 'TTB'),
            (E[(E.RTL = 1)] = 'RTL'),
            (E[(E.BTT = 2)] = 'BTT');
        })(P || (P = {})),
        (function (E) {
          (E[(E.None = 0)] = 'None'),
            (E[(E.SignPost = 1)] = 'SignPost'),
            (E[(E.FaceNearPlane = 2)] = 'FaceNearPlane');
        })(D || (D = {})),
        (function (E) {
          (E[(E.Float = 0)] = 'Float'),
            (E[(E.String = 1)] = 'String'),
            (E[(E.Boolean = 2)] = 'Boolean');
        })(M || (M = {})),
        (function (E) {
          (E[(E.Intersect = 0)] = 'Intersect'),
            (E[(E.Subtract = 1)] = 'Subtract');
        })(u || (u = {})),
        (function (E) {
          (E.OpenEnded = 'OpenEnded'),
            (E.Block = 'Block'),
            (E.Crossed = 'Crossed');
        })(l || (l = {})),
        (function (E) {
          (E.FullGeometry = 'FullGeometry'),
            (E.PerpendicularFromFirstSegment = 'PerpendicularFromFirstSegment'),
            (E.ReversedFirstSegment = 'ReversedFirstSegment'),
            (E.PerpendicularToSecondSegment = 'PerpendicularToSecondSegment'),
            (E.SecondSegmentWithTicks = 'SecondSegmentWithTicks'),
            (E.DoublePerpendicular = 'DoublePerpendicular'),
            (E.OppositeToFirstSegment = 'OppositeToFirstSegment'),
            (E.TriplePerpendicular = 'TriplePerpendicular'),
            (E.HalfCircleFirstSegment = 'HalfCircleFirstSegment'),
            (E.HalfCircleSecondSegment = 'HalfCircleSecondSegment'),
            (E.HalfCircleExtended = 'HalfCircleExtended'),
            (E.OpenCircle = 'OpenCircle'),
            (E.CoverageEdgesWithTicks = 'CoverageEdgesWithTicks'),
            (E.GapExtentWithDoubleTicks = 'GapExtentWithDoubleTicks'),
            (E.GapExtentMidline = 'GapExtentMidline'),
            (E.Chevron = 'Chevron'),
            (E.PerpendicularWithArc = 'PerpendicularWithArc'),
            (E.ClosedHalfCircle = 'ClosedHalfCircle'),
            (E.TripleParallelExtended = 'TripleParallelExtended'),
            (E.ParallelWithTicks = 'ParallelWithTicks'),
            (E.Parallel = 'Parallel'),
            (E.PerpendicularToFirstSegment = 'PerpendicularToFirstSegment'),
            (E.ParallelOffset = 'ParallelOffset'),
            (E.OffsetOpposite = 'OffsetOpposite'),
            (E.OffsetSame = 'OffsetSame'),
            (E.CircleWithArc = 'CircleWithArc'),
            (E.DoubleJog = 'DoubleJog'),
            (E.PerpendicularOffset = 'PerpendicularOffset'),
            (E.LineExcludingLastSegment = 'LineExcludingLastSegment'),
            (E.MultivertexArrow = 'MultivertexArrow'),
            (E.CrossedArrow = 'CrossedArrow'),
            (E.ChevronArrow = 'ChevronArrow'),
            (E.ChevronArrowOffset = 'ChevronArrowOffset'),
            (E.PartialFirstSegment = 'PartialFirstSegment'),
            (E.Arch = 'Arch'),
            (E.CurvedParallelTicks = 'CurvedParallelTicks'),
            (E.Arc90Degrees = 'Arc90Degrees');
        })(B || (B = {})),
        (function (E) {
          (E.Mitered = 'Mitered'),
            (E.Bevelled = 'Bevelled'),
            (E.Rounded = 'Rounded'),
            (E.Square = 'Square'),
            (E.TrueBuffer = 'TrueBuffer');
        })(U || (U = {})),
        (function (E) {
          (E.ClosePath = 'ClosePath'),
            (E.ConvexHull = 'ConvexHull'),
            (E.RectangularBox = 'RectangularBox');
        })(a || (a = {})),
        (function (E) {
          (E.BeginningOfLine = 'BeginningOfLine'), (E.EndOfLine = 'EndOfLine');
        })(G || (G = {})),
        (function (E) {
          (E.Mitered = 'Mitered'),
            (E.Bevelled = 'Bevelled'),
            (E.Rounded = 'Rounded'),
            (E.Square = 'Square');
        })(c || (c = {})),
        (function (E) {
          (E.Fast = 'Fast'), (E.Accurate = 'Accurate');
        })(F || (F = {})),
        (function (E) {
          (E.BeginningOfLine = 'BeginningOfLine'), (E.EndOfLine = 'EndOfLine');
        })(f || (f = {})),
        (function (E) {
          (E.Sinus = 'Sinus'),
            (E.Square = 'Square'),
            (E.Triangle = 'Triangle'),
            (E.Random = 'Random');
        })(d || (d = {})),
        (function (E) {
          (E[(E.None = 0)] = 'None'),
            (E[(E.Default = 1)] = 'Default'),
            (E[(E.Force = 2)] = 'Force');
        })(H || (H = {})),
        (function (E) {
          (E[(E.Buffered = 0)] = 'Buffered'),
            (E[(E.Left = 1)] = 'Left'),
            (E[(E.Right = 2)] = 'Right'),
            (E[(E.AlongLine = 3)] = 'AlongLine');
        })(s || (s = {})),
        (function (E) {
          (E[(E.Linear = 0)] = 'Linear'),
            (E[(E.Rectangular = 1)] = 'Rectangular'),
            (E[(E.Circular = 2)] = 'Circular'),
            (E[(E.Buffered = 3)] = 'Buffered');
        })(p || (p = {})),
        (function (E) {
          (E[(E.Discrete = 0)] = 'Discrete'),
            (E[(E.Continuous = 1)] = 'Continuous');
        })(g || (g = {})),
        (function (E) {
          (E[(E.AcrossLine = 0)] = 'AcrossLine'),
            (E[(E.AloneLine = 1)] = 'AloneLine');
        })(m || (m = {})),
        (function (E) {
          (E[(E.Left = 0)] = 'Left'),
            (E[(E.Right = 1)] = 'Right'),
            (E[(E.Center = 2)] = 'Center'),
            (E[(E.Justify = 3)] = 'Justify');
        })(Y || (Y = {})),
        (function (E) {
          (E[(E.Base = 0)] = 'Base'),
            (E[(E.MidPoint = 1)] = 'MidPoint'),
            (E[(E.ThreePoint = 2)] = 'ThreePoint'),
            (E[(E.FourPoint = 3)] = 'FourPoint'),
            (E[(E.Underline = 4)] = 'Underline'),
            (E[(E.CircularCW = 5)] = 'CircularCW'),
            (E[(E.CircularCCW = 6)] = 'CircularCCW');
        })(X || (X = {})),
        (function (E) {
          (E.Butt = 'Butt'), (E.Round = 'Round'), (E.Square = 'Square');
        })(V || (V = {})),
        (function (E) {
          (E.NoConstraint = 'NoConstraint'),
            (E.HalfPattern = 'HalfPattern'),
            (E.HalfGap = 'HalfGap'),
            (E.FullPattern = 'FullPattern'),
            (E.FullGap = 'FullGap'),
            (E.Custom = 'Custom');
        })(h || (h = {})),
        (function (E) {
          (E[(E.None = -1)] = 'None'),
            (E[(E.Custom = 0)] = 'Custom'),
            (E[(E.Circle = 1)] = 'Circle'),
            (E[(E.OpenArrow = 2)] = 'OpenArrow'),
            (E[(E.ClosedArrow = 3)] = 'ClosedArrow'),
            (E[(E.Diamond = 4)] = 'Diamond');
        })(W || (W = {})),
        (function (E) {
          (E[(E.ExtraLeading = 0)] = 'ExtraLeading'),
            (E[(E.Multiple = 1)] = 'Multiple'),
            (E[(E.Exact = 2)] = 'Exact');
        })(x || (x = {})),
        (function (E) {
          (E.Bevel = 'Bevel'), (E.Round = 'Round'), (E.Miter = 'Miter');
        })(y || (y = {})),
        (function (E) {
          (E[(E.Default = 0)] = 'Default'),
            (E[(E.String = 1)] = 'String'),
            (E[(E.Numeric = 2)] = 'Numeric');
        })(v || (v = {})),
        (function (E) {
          (E[(E.InsidePolygon = 0)] = 'InsidePolygon'),
            (E[(E.PolygonCenter = 1)] = 'PolygonCenter'),
            (E[(E.RandomlyInsidePolygon = 2)] = 'RandomlyInsidePolygon');
        })(b || (b = {})),
        (function (E) {
          (E[(E.Tint = 0)] = 'Tint'),
            (E[(E.Replace = 1)] = 'Replace'),
            (E[(E.Multiply = 2)] = 'Multiply');
        })(k || (k = {})),
        (function (E) {
          (E[(E.ClipAtBoundary = 0)] = 'ClipAtBoundary'),
            (E[(E.RemoveIfCenterOutsideBoundary = 1)] =
              'RemoveIfCenterOutsideBoundary'),
            (E[(E.DoNotTouchBoundary = 2)] = 'DoNotTouchBoundary'),
            (E[(E.DoNotClip = 3)] = 'DoNotClip');
        })(w || (w = {})),
        (function (E) {
          (E.NoConstraint = 'NoConstraint'),
            (E.WithMarkers = 'WithMarkers'),
            (E.WithFullGap = 'WithFullGap'),
            (E.WithHalfGap = 'WithHalfGap'),
            (E.Custom = 'Custom');
        })(K || (K = {})),
        (function (E) {
          (E.Fixed = 'Fixed'),
            (E.Random = 'Random'),
            (E.RandomFixedQuantity = 'RandomFixedQuantity');
        })(Z || (Z = {})),
        (function (E) {
          (E.LineMiddle = 'LineMiddle'),
            (E.LineBeginning = 'LineBeginning'),
            (E.LineEnd = 'LineEnd'),
            (E.SegmentMidpoint = 'SegmentMidpoint');
        })(Q || (Q = {})),
        (function (E) {
          (E.OnPolygon = 'OnPolygon'),
            (E.CenterOfMass = 'CenterOfMass'),
            (E.BoundingBoxCenter = 'BoundingBoxCenter');
        })(J || (J = {})),
        (function (E) {
          (E[(E.Low = 0)] = 'Low'),
            (E[(E.Medium = 1)] = 'Medium'),
            (E[(E.High = 2)] = 'High');
        })(q || (q = {})),
        (function (E) {
          (E[(E.MarkerCenter = 0)] = 'MarkerCenter'),
            (E[(E.MarkerBounds = 1)] = 'MarkerBounds');
        })(z || (z = {})),
        (function (E) {
          (E[(E.None = 0)] = 'None'),
            (E[(E.PropUniform = 1)] = 'PropUniform'),
            (E[(E.PropNonuniform = 2)] = 'PropNonuniform'),
            (E[(E.DifUniform = 3)] = 'DifUniform'),
            (E[(E.DifNonuniform = 4)] = 'DifNonuniform');
        })(j || (j = {})),
        (function (E) {
          (E.Tube = 'Tube'), (E.Strip = 'Strip'), (E.Wall = 'Wall');
        })($ || ($ = {})),
        (function (E) {
          (E[(E.Random = 0)] = 'Random'),
            (E[(E.Increasing = 1)] = 'Increasing'),
            (E[(E.Decreasing = 2)] = 'Decreasing'),
            (E[(E.IncreasingThenDecreasing = 3)] = 'IncreasingThenDecreasing');
        })(EE || (EE = {})),
        (function (E) {
          (E[(E.Relative = 0)] = 'Relative'),
            (E[(E.Absolute = 1)] = 'Absolute');
        })(_E || (_E = {})),
        (function (E) {
          (E[(E.Normal = 0)] = 'Normal'),
            (E[(E.LowerCase = 1)] = 'LowerCase'),
            (E[(E.Allcaps = 2)] = 'Allcaps');
        })(RE || (RE = {})),
        (function (E) {
          (E[(E.LTR = 0)] = 'LTR'), (E[(E.RTL = 1)] = 'RTL');
        })(TE || (TE = {})),
        (function (E) {
          (E.Draft = 'Draft'), (E.Picture = 'Picture'), (E.Text = 'Text');
        })(eE || (eE = {})),
        (function (E) {
          (E[(E.Top = 0)] = 'Top'),
            (E[(E.Center = 1)] = 'Center'),
            (E[(E.Baseline = 2)] = 'Baseline'),
            (E[(E.Bottom = 3)] = 'Bottom');
        })(AE || (AE = {})),
        (function (E) {
          (E[(E.Right = 0)] = 'Right'), (E[(E.Upright = 1)] = 'Upright');
        })(nE || (nE = {})),
        (function (E) {
          (E[(E.Small = 0)] = 'Small'),
            (E[(E.Medium = 1)] = 'Medium'),
            (E[(E.Large = 2)] = 'Large');
        })(NE || (NE = {})),
        (function (E) {
          (E[(E.Calm = 0)] = 'Calm'),
            (E[(E.Rippled = 1)] = 'Rippled'),
            (E[(E.Slight = 2)] = 'Slight'),
            (E[(E.Moderate = 3)] = 'Moderate');
        })(CE || (CE = {}));
    },
    16534: (E, _, R) => {
      R.d(_, {
        xl: () => S,
        pU: () => i,
        aK: () => t,
        Uh: () => M,
        _6: () => a,
        Tz: () => l,
        CQ: () => u,
        oK: () => B,
        e0: () => U,
        SD: () => G,
        XJ: () => L,
        Ex: () => N,
        uG: () => I,
        xm: () => n,
        m4: () => O,
        MI: () => D,
        AI: () => T,
        Ip: () => P,
        ru: () => e,
        fL: () => r,
        Iw: () => C,
        tQ: () => o,
        I_: () => A,
      });
      const T = 1e-30,
        e = 4294967295,
        A = 512,
        n = 29,
        N = 24,
        C = 8,
        S = 1,
        i = 2,
        t = 3,
        O = 2,
        I = 1,
        o = 1.05,
        r = 2,
        L = 8,
        P = 500,
        D = 10,
        M = 2,
        u = 0,
        l = 1,
        B = 4,
        U = 8,
        a = 4,
        G = 1;
    },
    35371: (E, _, R) => {
      var T,
        e,
        A,
        n,
        N,
        C,
        S,
        i,
        t,
        O,
        I,
        o,
        r,
        L,
        P,
        D,
        M,
        u,
        l,
        B,
        U,
        a,
        G,
        c;
      R.d(_, {
        zi: () => A,
        db: () => n,
        w0: () => N,
        VY: () => c,
        wb: () => t,
        q_: () => f,
        Wf: () => S,
        g: () => i,
        Lu: () => F,
        OU: () => a,
        LR: () => C,
        qi: () => B,
        VI: () => L,
        Br: () => D,
        MX: () => e,
        Tg: () => M,
        _g: () => G,
        lP: () => P,
        xS: () => O,
        Lm: () => U,
        cw: () => I,
        No: () => r,
        e8: () => o,
        l1: () => u,
      }),
        (function (E) {
          (E[(E.DEPTH_BUFFER_BIT = 256)] = 'DEPTH_BUFFER_BIT'),
            (E[(E.STENCIL_BUFFER_BIT = 1024)] = 'STENCIL_BUFFER_BIT'),
            (E[(E.COLOR_BUFFER_BIT = 16384)] = 'COLOR_BUFFER_BIT');
        })(T || (T = {})),
        (function (E) {
          (E[(E.POINTS = 0)] = 'POINTS'),
            (E[(E.LINES = 1)] = 'LINES'),
            (E[(E.LINE_LOOP = 2)] = 'LINE_LOOP'),
            (E[(E.LINE_STRIP = 3)] = 'LINE_STRIP'),
            (E[(E.TRIANGLES = 4)] = 'TRIANGLES'),
            (E[(E.TRIANGLE_STRIP = 5)] = 'TRIANGLE_STRIP'),
            (E[(E.TRIANGLE_FAN = 6)] = 'TRIANGLE_FAN');
        })(e || (e = {})),
        (function (E) {
          (E[(E.ZERO = 0)] = 'ZERO'),
            (E[(E.ONE = 1)] = 'ONE'),
            (E[(E.SRC_COLOR = 768)] = 'SRC_COLOR'),
            (E[(E.ONE_MINUS_SRC_COLOR = 769)] = 'ONE_MINUS_SRC_COLOR'),
            (E[(E.SRC_ALPHA = 770)] = 'SRC_ALPHA'),
            (E[(E.ONE_MINUS_SRC_ALPHA = 771)] = 'ONE_MINUS_SRC_ALPHA'),
            (E[(E.DST_ALPHA = 772)] = 'DST_ALPHA'),
            (E[(E.ONE_MINUS_DST_ALPHA = 773)] = 'ONE_MINUS_DST_ALPHA'),
            (E[(E.DST_COLOR = 774)] = 'DST_COLOR'),
            (E[(E.ONE_MINUS_DST_COLOR = 775)] = 'ONE_MINUS_DST_COLOR'),
            (E[(E.SRC_ALPHA_SATURATE = 776)] = 'SRC_ALPHA_SATURATE'),
            (E[(E.CONSTANT_COLOR = 32769)] = 'CONSTANT_COLOR'),
            (E[(E.ONE_MINUS_CONSTANT_COLOR = 32770)] =
              'ONE_MINUS_CONSTANT_COLOR'),
            (E[(E.CONSTANT_ALPHA = 32771)] = 'CONSTANT_ALPHA'),
            (E[(E.ONE_MINUS_CONSTANT_ALPHA = 32772)] =
              'ONE_MINUS_CONSTANT_ALPHA');
        })(A || (A = {})),
        (function (E) {
          (E[(E.ADD = 32774)] = 'ADD'),
            (E[(E.SUBTRACT = 32778)] = 'SUBTRACT'),
            (E[(E.REVERSE_SUBTRACT = 32779)] = 'REVERSE_SUBTRACT');
        })(n || (n = {})),
        (function (E) {
          (E[(E.ARRAY_BUFFER = 34962)] = 'ARRAY_BUFFER'),
            (E[(E.ELEMENT_ARRAY_BUFFER = 34963)] = 'ELEMENT_ARRAY_BUFFER'),
            (E[(E.UNIFORM_BUFFER = 35345)] = 'UNIFORM_BUFFER'),
            (E[(E.PIXEL_PACK_BUFFER = 35051)] = 'PIXEL_PACK_BUFFER'),
            (E[(E.PIXEL_UNPACK_BUFFER = 35052)] = 'PIXEL_UNPACK_BUFFER'),
            (E[(E.COPY_READ_BUFFER = 36662)] = 'COPY_READ_BUFFER'),
            (E[(E.COPY_WRITE_BUFFER = 36663)] = 'COPY_WRITE_BUFFER');
        })(N || (N = {})),
        (function (E) {
          (E[(E.FRONT = 1028)] = 'FRONT'),
            (E[(E.BACK = 1029)] = 'BACK'),
            (E[(E.FRONT_AND_BACK = 1032)] = 'FRONT_AND_BACK');
        })(C || (C = {})),
        (function (E) {
          (E[(E.CW = 2304)] = 'CW'), (E[(E.CCW = 2305)] = 'CCW');
        })(S || (S = {})),
        (function (E) {
          (E[(E.BYTE = 5120)] = 'BYTE'),
            (E[(E.UNSIGNED_BYTE = 5121)] = 'UNSIGNED_BYTE'),
            (E[(E.SHORT = 5122)] = 'SHORT'),
            (E[(E.UNSIGNED_SHORT = 5123)] = 'UNSIGNED_SHORT'),
            (E[(E.INT = 5124)] = 'INT'),
            (E[(E.UNSIGNED_INT = 5125)] = 'UNSIGNED_INT'),
            (E[(E.FLOAT = 5126)] = 'FLOAT');
        })(i || (i = {})),
        (function (E) {
          (E[(E.NEVER = 512)] = 'NEVER'),
            (E[(E.LESS = 513)] = 'LESS'),
            (E[(E.EQUAL = 514)] = 'EQUAL'),
            (E[(E.LEQUAL = 515)] = 'LEQUAL'),
            (E[(E.GREATER = 516)] = 'GREATER'),
            (E[(E.NOTEQUAL = 517)] = 'NOTEQUAL'),
            (E[(E.GEQUAL = 518)] = 'GEQUAL'),
            (E[(E.ALWAYS = 519)] = 'ALWAYS');
        })(t || (t = {})),
        (function (E) {
          (E[(E.ZERO = 0)] = 'ZERO'),
            (E[(E.KEEP = 7680)] = 'KEEP'),
            (E[(E.REPLACE = 7681)] = 'REPLACE'),
            (E[(E.INCR = 7682)] = 'INCR'),
            (E[(E.DECR = 7683)] = 'DECR'),
            (E[(E.INVERT = 5386)] = 'INVERT'),
            (E[(E.INCR_WRAP = 34055)] = 'INCR_WRAP'),
            (E[(E.DECR_WRAP = 34056)] = 'DECR_WRAP');
        })(O || (O = {})),
        (function (E) {
          (E[(E.NEAREST = 9728)] = 'NEAREST'),
            (E[(E.LINEAR = 9729)] = 'LINEAR'),
            (E[(E.NEAREST_MIPMAP_NEAREST = 9984)] = 'NEAREST_MIPMAP_NEAREST'),
            (E[(E.LINEAR_MIPMAP_NEAREST = 9985)] = 'LINEAR_MIPMAP_NEAREST'),
            (E[(E.NEAREST_MIPMAP_LINEAR = 9986)] = 'NEAREST_MIPMAP_LINEAR'),
            (E[(E.LINEAR_MIPMAP_LINEAR = 9987)] = 'LINEAR_MIPMAP_LINEAR');
        })(I || (I = {})),
        (function (E) {
          (E[(E.CLAMP_TO_EDGE = 33071)] = 'CLAMP_TO_EDGE'),
            (E[(E.REPEAT = 10497)] = 'REPEAT'),
            (E[(E.MIRRORED_REPEAT = 33648)] = 'MIRRORED_REPEAT');
        })(o || (o = {})),
        (function (E) {
          (E[(E.TEXTURE_2D = 3553)] = 'TEXTURE_2D'),
            (E[(E.TEXTURE_CUBE_MAP = 34067)] = 'TEXTURE_CUBE_MAP'),
            (E[(E.TEXTURE_3D = 32879)] = 'TEXTURE_3D'),
            (E[(E.TEXTURE_CUBE_MAP_POSITIVE_X = 34069)] =
              'TEXTURE_CUBE_MAP_POSITIVE_X'),
            (E[(E.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070)] =
              'TEXTURE_CUBE_MAP_NEGATIVE_X'),
            (E[(E.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071)] =
              'TEXTURE_CUBE_MAP_POSITIVE_Y'),
            (E[(E.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072)] =
              'TEXTURE_CUBE_MAP_NEGATIVE_Y'),
            (E[(E.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073)] =
              'TEXTURE_CUBE_MAP_POSITIVE_Z'),
            (E[(E.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074)] =
              'TEXTURE_CUBE_MAP_NEGATIVE_Z'),
            (E[(E.TEXTURE_2D_ARRAY = 35866)] = 'TEXTURE_2D_ARRAY');
        })(r || (r = {})),
        (function (E) {
          (E[(E.DEPTH_COMPONENT = 6402)] = 'DEPTH_COMPONENT'),
            (E[(E.DEPTH_STENCIL = 34041)] = 'DEPTH_STENCIL'),
            (E[(E.ALPHA = 6406)] = 'ALPHA'),
            (E[(E.RGB = 6407)] = 'RGB'),
            (E[(E.RGBA = 6408)] = 'RGBA'),
            (E[(E.LUMINANCE = 6409)] = 'LUMINANCE'),
            (E[(E.LUMINANCE_ALPHA = 6410)] = 'LUMINANCE_ALPHA'),
            (E[(E.RED = 6403)] = 'RED'),
            (E[(E.RG = 33319)] = 'RG'),
            (E[(E.RED_INTEGER = 36244)] = 'RED_INTEGER'),
            (E[(E.RG_INTEGER = 33320)] = 'RG_INTEGER'),
            (E[(E.RGB_INTEGER = 36248)] = 'RGB_INTEGER'),
            (E[(E.RGBA_INTEGER = 36249)] = 'RGBA_INTEGER');
        })(L || (L = {})),
        (function (E) {
          (E[(E.RGBA4 = 32854)] = 'RGBA4'),
            (E[(E.R16F = 33325)] = 'R16F'),
            (E[(E.RG16F = 33327)] = 'RG16F'),
            (E[(E.RGB32F = 34837)] = 'RGB32F'),
            (E[(E.RGBA16F = 34842)] = 'RGBA16F'),
            (E[(E.R32F = 33326)] = 'R32F'),
            (E[(E.RG32F = 33328)] = 'RG32F'),
            (E[(E.RGBA32F = 34836)] = 'RGBA32F'),
            (E[(E.R11F_G11F_B10F = 35898)] = 'R11F_G11F_B10F'),
            (E[(E.RGB8 = 32849)] = 'RGB8'),
            (E[(E.RGBA8 = 32856)] = 'RGBA8'),
            (E[(E.RGB5_A1 = 32855)] = 'RGB5_A1'),
            (E[(E.R8 = 33321)] = 'R8'),
            (E[(E.RG8 = 33323)] = 'RG8'),
            (E[(E.R8I = 33329)] = 'R8I'),
            (E[(E.R8UI = 33330)] = 'R8UI'),
            (E[(E.R16I = 33331)] = 'R16I'),
            (E[(E.R16UI = 33332)] = 'R16UI'),
            (E[(E.R32I = 33333)] = 'R32I'),
            (E[(E.R32UI = 33334)] = 'R32UI'),
            (E[(E.RG8I = 33335)] = 'RG8I'),
            (E[(E.RG8UI = 33336)] = 'RG8UI'),
            (E[(E.RG16I = 33337)] = 'RG16I'),
            (E[(E.RG16UI = 33338)] = 'RG16UI'),
            (E[(E.RG32I = 33339)] = 'RG32I'),
            (E[(E.RG32UI = 33340)] = 'RG32UI'),
            (E[(E.RGB16F = 34843)] = 'RGB16F'),
            (E[(E.RGB9_E5 = 35901)] = 'RGB9_E5'),
            (E[(E.SRGB8 = 35905)] = 'SRGB8'),
            (E[(E.SRGB8_ALPHA8 = 35907)] = 'SRGB8_ALPHA8'),
            (E[(E.RGB565 = 36194)] = 'RGB565'),
            (E[(E.RGBA32UI = 36208)] = 'RGBA32UI'),
            (E[(E.RGB32UI = 36209)] = 'RGB32UI'),
            (E[(E.RGBA16UI = 36214)] = 'RGBA16UI'),
            (E[(E.RGB16UI = 36215)] = 'RGB16UI'),
            (E[(E.RGBA8UI = 36220)] = 'RGBA8UI'),
            (E[(E.RGB8UI = 36221)] = 'RGB8UI'),
            (E[(E.RGBA32I = 36226)] = 'RGBA32I'),
            (E[(E.RGB32I = 36227)] = 'RGB32I'),
            (E[(E.RGBA16I = 36232)] = 'RGBA16I'),
            (E[(E.RGB16I = 36233)] = 'RGB16I'),
            (E[(E.RGBA8I = 36238)] = 'RGBA8I'),
            (E[(E.RGB8I = 36239)] = 'RGB8I'),
            (E[(E.R8_SNORM = 36756)] = 'R8_SNORM'),
            (E[(E.RG8_SNORM = 36757)] = 'RG8_SNORM'),
            (E[(E.RGB8_SNORM = 36758)] = 'RGB8_SNORM'),
            (E[(E.RGBA8_SNORM = 36759)] = 'RGBA8_SNORM'),
            (E[(E.RGB10_A2 = 32857)] = 'RGB10_A2'),
            (E[(E.RGB10_A2UI = 36975)] = 'RGB10_A2UI');
        })(P || (P = {})),
        (function (E) {
          (E[(E.FLOAT = 5126)] = 'FLOAT'),
            (E[(E.UNSIGNED_BYTE = 5121)] = 'UNSIGNED_BYTE'),
            (E[(E.UNSIGNED_INT_24_8 = 34042)] = 'UNSIGNED_INT_24_8'),
            (E[(E.UNSIGNED_SHORT_4_4_4_4 = 32819)] = 'UNSIGNED_SHORT_4_4_4_4'),
            (E[(E.UNSIGNED_SHORT_5_5_5_1 = 32820)] = 'UNSIGNED_SHORT_5_5_5_1'),
            (E[(E.UNSIGNED_SHORT_5_6_5 = 33635)] = 'UNSIGNED_SHORT_5_6_5'),
            (E[(E.BYTE = 5120)] = 'BYTE'),
            (E[(E.UNSIGNED_SHORT = 5123)] = 'UNSIGNED_SHORT'),
            (E[(E.SHORT = 5122)] = 'SHORT'),
            (E[(E.UNSIGNED_INT = 5125)] = 'UNSIGNED_INT'),
            (E[(E.INT = 5124)] = 'INT'),
            (E[(E.HALF_FLOAT = 5131)] = 'HALF_FLOAT'),
            (E[(E.UNSIGNED_INT_2_10_10_10_REV = 33640)] =
              'UNSIGNED_INT_2_10_10_10_REV'),
            (E[(E.UNSIGNED_INT_10F_11F_11F_REV = 35899)] =
              'UNSIGNED_INT_10F_11F_11F_REV'),
            (E[(E.UNSIGNED_INT_5_9_9_9_REV = 35902)] =
              'UNSIGNED_INT_5_9_9_9_REV'),
            (E[(E.FLOAT_32_UNSIGNED_INT_24_8_REV = 36269)] =
              'FLOAT_32_UNSIGNED_INT_24_8_REV');
        })(D || (D = {})),
        (function (E) {
          (E[(E.DEPTH_COMPONENT16 = 33189)] = 'DEPTH_COMPONENT16'),
            (E[(E.STENCIL_INDEX8 = 36168)] = 'STENCIL_INDEX8'),
            (E[(E.DEPTH_STENCIL = 34041)] = 'DEPTH_STENCIL'),
            (E[(E.DEPTH_COMPONENT24 = 33190)] = 'DEPTH_COMPONENT24'),
            (E[(E.DEPTH_COMPONENT32F = 36012)] = 'DEPTH_COMPONENT32F'),
            (E[(E.DEPTH24_STENCIL8 = 35056)] = 'DEPTH24_STENCIL8'),
            (E[(E.DEPTH32F_STENCIL8 = 36013)] = 'DEPTH32F_STENCIL8');
        })(M || (M = {})),
        (function (E) {
          (E[(E.STATIC_DRAW = 35044)] = 'STATIC_DRAW'),
            (E[(E.DYNAMIC_DRAW = 35048)] = 'DYNAMIC_DRAW'),
            (E[(E.STREAM_DRAW = 35040)] = 'STREAM_DRAW'),
            (E[(E.STATIC_READ = 35045)] = 'STATIC_READ'),
            (E[(E.DYNAMIC_READ = 35049)] = 'DYNAMIC_READ'),
            (E[(E.STREAM_READ = 35041)] = 'STREAM_READ'),
            (E[(E.STATIC_COPY = 35046)] = 'STATIC_COPY'),
            (E[(E.DYNAMIC_COPY = 35050)] = 'DYNAMIC_COPY'),
            (E[(E.STREAM_COPY = 35042)] = 'STREAM_COPY');
        })(u || (u = {})),
        (function (E) {
          (E[(E.FRAGMENT_SHADER = 35632)] = 'FRAGMENT_SHADER'),
            (E[(E.VERTEX_SHADER = 35633)] = 'VERTEX_SHADER');
        })(l || (l = {})),
        (function (E) {
          (E[(E.FRAMEBUFFER = 36160)] = 'FRAMEBUFFER'),
            (E[(E.READ_FRAMEBUFFER = 36008)] = 'READ_FRAMEBUFFER'),
            (E[(E.DRAW_FRAMEBUFFER = 36009)] = 'DRAW_FRAMEBUFFER');
        })(B || (B = {})),
        (function (E) {
          (E[(E.TEXTURE = 0)] = 'TEXTURE'),
            (E[(E.RENDER_BUFFER = 1)] = 'RENDER_BUFFER'),
            (E[(E.CUBEMAP = 2)] = 'CUBEMAP');
        })(U || (U = {})),
        (function (E) {
          (E[(E.NONE = 0)] = 'NONE'),
            (E[(E.DEPTH_RENDER_BUFFER = 1)] = 'DEPTH_RENDER_BUFFER'),
            (E[(E.STENCIL_RENDER_BUFFER = 2)] = 'STENCIL_RENDER_BUFFER'),
            (E[(E.DEPTH_STENCIL_RENDER_BUFFER = 3)] =
              'DEPTH_STENCIL_RENDER_BUFFER'),
            (E[(E.DEPTH_STENCIL_TEXTURE = 4)] = 'DEPTH_STENCIL_TEXTURE');
        })(a || (a = {})),
        (function (E) {
          (E[(E.Texture = 0)] = 'Texture'),
            (E[(E.Buffer = 1)] = 'Buffer'),
            (E[(E.VAO = 2)] = 'VAO'),
            (E[(E.Shader = 3)] = 'Shader'),
            (E[(E.Program = 4)] = 'Program'),
            (E[(E.Framebuffer = 5)] = 'Framebuffer'),
            (E[(E.Renderbuffer = 6)] = 'Renderbuffer'),
            (E[(E.Sync = 7)] = 'Sync'),
            (E[(E.COUNT = 8)] = 'COUNT');
        })(G || (G = {})),
        (function (E) {
          (E[(E.COLOR_ATTACHMENT0 = 36064)] = 'COLOR_ATTACHMENT0'),
            (E[(E.COLOR_ATTACHMENT1 = 36065)] = 'COLOR_ATTACHMENT1'),
            (E[(E.COLOR_ATTACHMENT2 = 36066)] = 'COLOR_ATTACHMENT2'),
            (E[(E.COLOR_ATTACHMENT3 = 36067)] = 'COLOR_ATTACHMENT3'),
            (E[(E.COLOR_ATTACHMENT4 = 36068)] = 'COLOR_ATTACHMENT4'),
            (E[(E.COLOR_ATTACHMENT5 = 36069)] = 'COLOR_ATTACHMENT5'),
            (E[(E.COLOR_ATTACHMENT6 = 36070)] = 'COLOR_ATTACHMENT6'),
            (E[(E.COLOR_ATTACHMENT7 = 36071)] = 'COLOR_ATTACHMENT7'),
            (E[(E.COLOR_ATTACHMENT8 = 36072)] = 'COLOR_ATTACHMENT8'),
            (E[(E.COLOR_ATTACHMENT9 = 36073)] = 'COLOR_ATTACHMENT9'),
            (E[(E.COLOR_ATTACHMENT10 = 36074)] = 'COLOR_ATTACHMENT10'),
            (E[(E.COLOR_ATTACHMENT11 = 36075)] = 'COLOR_ATTACHMENT11'),
            (E[(E.COLOR_ATTACHMENT12 = 36076)] = 'COLOR_ATTACHMENT12'),
            (E[(E.COLOR_ATTACHMENT13 = 36077)] = 'COLOR_ATTACHMENT13'),
            (E[(E.COLOR_ATTACHMENT14 = 36078)] = 'COLOR_ATTACHMENT14'),
            (E[(E.COLOR_ATTACHMENT15 = 36079)] = 'COLOR_ATTACHMENT15');
        })(c || (c = {}));
      const F = 33306;
      var f, d, H, s, p, g, m;
      !(function (E) {
        (E[(E.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776)] =
          'COMPRESSED_RGB_S3TC_DXT1_EXT'),
          (E[(E.COMPRESSED_RGBA_S3TC_DXT1_EXT = 33777)] =
            'COMPRESSED_RGBA_S3TC_DXT1_EXT'),
          (E[(E.COMPRESSED_RGBA_S3TC_DXT3_EXT = 33778)] =
            'COMPRESSED_RGBA_S3TC_DXT3_EXT'),
          (E[(E.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779)] =
            'COMPRESSED_RGBA_S3TC_DXT5_EXT'),
          (E[(E.COMPRESSED_R11_EAC = 37488)] = 'COMPRESSED_R11_EAC'),
          (E[(E.COMPRESSED_SIGNED_R11_EAC = 37489)] =
            'COMPRESSED_SIGNED_R11_EAC'),
          (E[(E.COMPRESSED_RG11_EAC = 37490)] = 'COMPRESSED_RG11_EAC'),
          (E[(E.COMPRESSED_SIGNED_RG11_EAC = 37491)] =
            'COMPRESSED_SIGNED_RG11_EAC'),
          (E[(E.COMPRESSED_RGB8_ETC2 = 37492)] = 'COMPRESSED_RGB8_ETC2'),
          (E[(E.COMPRESSED_SRGB8_ETC2 = 37493)] = 'COMPRESSED_SRGB8_ETC2'),
          (E[(E.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37494)] =
            'COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2'),
          (E[(E.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37495)] =
            'COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2'),
          (E[(E.COMPRESSED_RGBA8_ETC2_EAC = 37496)] =
            'COMPRESSED_RGBA8_ETC2_EAC'),
          (E[(E.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 37497)] =
            'COMPRESSED_SRGB8_ALPHA8_ETC2_EAC');
      })(f || (f = {})),
        (function (E) {
          (E[(E.FLOAT = 5126)] = 'FLOAT'),
            (E[(E.FLOAT_VEC2 = 35664)] = 'FLOAT_VEC2'),
            (E[(E.FLOAT_VEC3 = 35665)] = 'FLOAT_VEC3'),
            (E[(E.FLOAT_VEC4 = 35666)] = 'FLOAT_VEC4'),
            (E[(E.INT = 5124)] = 'INT'),
            (E[(E.INT_VEC2 = 35667)] = 'INT_VEC2'),
            (E[(E.INT_VEC3 = 35668)] = 'INT_VEC3'),
            (E[(E.INT_VEC4 = 35669)] = 'INT_VEC4'),
            (E[(E.BOOL = 35670)] = 'BOOL'),
            (E[(E.BOOL_VEC2 = 35671)] = 'BOOL_VEC2'),
            (E[(E.BOOL_VEC3 = 35672)] = 'BOOL_VEC3'),
            (E[(E.BOOL_VEC4 = 35673)] = 'BOOL_VEC4'),
            (E[(E.FLOAT_MAT2 = 35674)] = 'FLOAT_MAT2'),
            (E[(E.FLOAT_MAT3 = 35675)] = 'FLOAT_MAT3'),
            (E[(E.FLOAT_MAT4 = 35676)] = 'FLOAT_MAT4'),
            (E[(E.SAMPLER_2D = 35678)] = 'SAMPLER_2D'),
            (E[(E.SAMPLER_CUBE = 35680)] = 'SAMPLER_CUBE'),
            (E[(E.UNSIGNED_INT = 5125)] = 'UNSIGNED_INT'),
            (E[(E.UNSIGNED_INT_VEC2 = 36294)] = 'UNSIGNED_INT_VEC2'),
            (E[(E.UNSIGNED_INT_VEC3 = 36295)] = 'UNSIGNED_INT_VEC3'),
            (E[(E.UNSIGNED_INT_VEC4 = 36296)] = 'UNSIGNED_INT_VEC4'),
            (E[(E.FLOAT_MAT2x3 = 35685)] = 'FLOAT_MAT2x3'),
            (E[(E.FLOAT_MAT2x4 = 35686)] = 'FLOAT_MAT2x4'),
            (E[(E.FLOAT_MAT3x2 = 35687)] = 'FLOAT_MAT3x2'),
            (E[(E.FLOAT_MAT3x4 = 35688)] = 'FLOAT_MAT3x4'),
            (E[(E.FLOAT_MAT4x2 = 35689)] = 'FLOAT_MAT4x2'),
            (E[(E.FLOAT_MAT4x3 = 35690)] = 'FLOAT_MAT4x3'),
            (E[(E.SAMPLER_3D = 35679)] = 'SAMPLER_3D'),
            (E[(E.SAMPLER_2D_SHADOW = 35682)] = 'SAMPLER_2D_SHADOW'),
            (E[(E.SAMPLER_2D_ARRAY = 36289)] = 'SAMPLER_2D_ARRAY'),
            (E[(E.SAMPLER_2D_ARRAY_SHADOW = 36292)] =
              'SAMPLER_2D_ARRAY_SHADOW'),
            (E[(E.SAMPLER_CUBE_SHADOW = 36293)] = 'SAMPLER_CUBE_SHADOW'),
            (E[(E.INT_SAMPLER_2D = 36298)] = 'INT_SAMPLER_2D'),
            (E[(E.INT_SAMPLER_3D = 36299)] = 'INT_SAMPLER_3D'),
            (E[(E.INT_SAMPLER_CUBE = 36300)] = 'INT_SAMPLER_CUBE'),
            (E[(E.INT_SAMPLER_2D_ARRAY = 36303)] = 'INT_SAMPLER_2D_ARRAY'),
            (E[(E.UNSIGNED_INT_SAMPLER_2D = 36306)] =
              'UNSIGNED_INT_SAMPLER_2D'),
            (E[(E.UNSIGNED_INT_SAMPLER_3D = 36307)] =
              'UNSIGNED_INT_SAMPLER_3D'),
            (E[(E.UNSIGNED_INT_SAMPLER_CUBE = 36308)] =
              'UNSIGNED_INT_SAMPLER_CUBE'),
            (E[(E.UNSIGNED_INT_SAMPLER_2D_ARRAY = 36311)] =
              'UNSIGNED_INT_SAMPLER_2D_ARRAY');
        })(d || (d = {})),
        (function (E) {
          (E[(E.OBJECT_TYPE = 37138)] = 'OBJECT_TYPE'),
            (E[(E.SYNC_CONDITION = 37139)] = 'SYNC_CONDITION'),
            (E[(E.SYNC_STATUS = 37140)] = 'SYNC_STATUS'),
            (E[(E.SYNC_FLAGS = 37141)] = 'SYNC_FLAGS');
        })(H || (H = {})),
        (function (E) {
          (E[(E.UNSIGNALED = 37144)] = 'UNSIGNALED'),
            (E[(E.SIGNALED = 37145)] = 'SIGNALED');
        })(s || (s = {})),
        (function (E) {
          (E[(E.ALREADY_SIGNALED = 37146)] = 'ALREADY_SIGNALED'),
            (E[(E.TIMEOUT_EXPIRED = 37147)] = 'TIMEOUT_EXPIRED'),
            (E[(E.CONDITION_SATISFIED = 37148)] = 'CONDITION_SATISFIED'),
            (E[(E.WAIT_FAILED = 37149)] = 'WAIT_FAILED');
        })(p || (p = {})),
        (function (E) {
          E[(E.SYNC_GPU_COMMANDS_COMPLETE = 37143)] =
            'SYNC_GPU_COMMANDS_COMPLETE';
        })(g || (g = {})),
        (function (E) {
          E[(E.SYNC_FLUSH_COMMANDS_BIT = 1)] = 'SYNC_FLUSH_COMMANDS_BIT';
        })(m || (m = {}));
    },
  },
]);
